import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Device3DMockupProps {
  screenImage?: string;
  restRX?: number;
  restRZ?: number;
  restRY?: number;
  startRX?: number;
  startRZ?: number;
  bgClass?: string;
  cameraX?: number;
  cameraY?: number;
  cameraZ?: number;
  restScale?: number;
  restX?: number;
  restY?: number;
  mobileRestX?: number;  // overrides restX on mobile (≤599px)
  mobileRestY?: number;  // overrides restY on mobile
  mobileRestScale?: number; // overrides restScale on mobile
}

export const Device3DMockup = ({
  screenImage = '/images/n26_screen.jpg',
  restRX = -Math.PI / 2,
  restRZ = Math.PI / 2.8,
  restRY = 0,
  startRX,
  startRZ,
  bgClass,
  cameraX = 4.2,
  cameraY = 9.0,
  cameraZ = 5.5,
  restScale = 2.2,
  restX = 0,
  restY = -1.5,
  mobileRestX,
  mobileRestY,
  mobileRestScale,
}: Device3DMockupProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // ─── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // ─── Scene & Camera ────────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 200);
    camera.position.set(cameraX, cameraY, cameraZ);
    camera.lookAt(0, 0, 0);

    // ─── Lights ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(8, 4, -6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(4096, 4096);
    keyLight.shadow.camera.near   = 1;
    keyLight.shadow.camera.far    = 40;
    keyLight.shadow.camera.left   = -12;
    keyLight.shadow.camera.right  = 12;
    keyLight.shadow.camera.top    = 12;
    keyLight.shadow.camera.bottom = -12;
    keyLight.shadow.radius = 6;
    keyLight.shadow.bias   = -0.0003;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xe0f0ff, 0.6);
    rimLight.position.set(6, 2, -6);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.7);
    fillLight.position.set(0, 10, 3);
    scene.add(fillLight);

    // Ground shadow plane removed — shadows kept on device geometry only.

    // ─── Rounded rect shape helper ─────────────────────────────────────────────
    function roundedRect(rw: number, rh: number, r: number) {
      const s = new THREE.Shape();
      s.moveTo(-rw/2 + r, -rh/2);
      s.lineTo( rw/2 - r, -rh/2);
      s.quadraticCurveTo( rw/2, -rh/2,  rw/2, -rh/2 + r);
      s.lineTo( rw/2,  rh/2 - r);
      s.quadraticCurveTo( rw/2,  rh/2,  rw/2 - r,  rh/2);
      s.lineTo(-rw/2 + r,  rh/2);
      s.quadraticCurveTo(-rw/2,  rh/2, -rw/2,  rh/2 - r);
      s.lineTo(-rw/2, -rh/2 + r);
      s.quadraticCurveTo(-rw/2, -rh/2, -rw/2 + r, -rh/2);
      return s;
    }

    // ─── Device dimensions ─────────────────────────────────────────────────────
    const W  = 2.2;
    const H  = 4.7;
    const D  = 0.22;
    const CR = 0.38;

    const Z_BACK   = -D / 2;
    const Z_FRONT  = D / 2 + 0.056;
    const Z_SCREEN = Z_FRONT + 0.015; // physically above front cap — no polygon offset needed

    // ─── Materials ─────────────────────────────────────────────────────────────
    const matteMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.6, metalness: 0.0 });
    const btnMat   = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.90, metalness: 0.0 });

    // ─── Device group ──────────────────────────────────────────────────────────
    const group = new THREE.Group();
    // Initial rotation set after START values are declared (see animate loop setup below)
    group.scale.setScalar(3.5); // start zoomed in; intro animates to resting scale
    scene.add(group);

    // Body
    const bodyGeo = new THREE.ExtrudeGeometry(roundedRect(W, H, CR), {
      depth: D,
      bevelEnabled:   true,
      bevelThickness: 0.055,
      bevelSize:      0.055,
      bevelSegments:  32,
    });
    bodyGeo.computeVertexNormals();
    const bodyMesh = new THREE.Mesh(bodyGeo, matteMat);
    bodyMesh.position.z = Z_BACK;
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    group.add(bodyMesh);

    // Black front cap
    const frontCap = new THREE.Mesh(
      new THREE.ShapeGeometry(roundedRect(W, H, CR), 96),
      new THREE.MeshStandardMaterial({
        color: 0x080808,
        roughness: 0.5,
        metalness: 0.0,
        polygonOffset: true,
        polygonOffsetFactor: 4,
        polygonOffsetUnits: 4,
      })
    );
    frontCap.position.z = Z_FRONT;
    group.add(frontCap);

    // Screen
    const screenTexture = new THREE.TextureLoader().load(screenImage);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    const screenGeo = new THREE.ShapeGeometry(roundedRect(W - 0.14, H - 0.14, CR - 0.07), 96);
    // ShapeGeometry uses raw x/y positions as UVs; remap to [0, 1]
    const sw = W - 0.14;
    const sh = H - 0.14;
    const uvAttr = screenGeo.attributes.uv as THREE.BufferAttribute;
    const posAttr = screenGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < posAttr.count; i++) {
      uvAttr.setXY(
        i,
        (posAttr.getX(i) + sw / 2) / sw,
        (posAttr.getY(i) + sh / 2) / sh,
      );
    }
    uvAttr.needsUpdate = true;
    const screenMesh = new THREE.Mesh(
      screenGeo,
      new THREE.MeshBasicMaterial({
        map: screenTexture,
        color: 0xe8e8e8,
        polygonOffset: false,
      })
    );
    screenMesh.position.z = Z_SCREEN;
    screenMesh.receiveShadow = true;
    group.add(screenMesh);

    // Side buttons
    function addBtn(bw: number, bh: number, bd: number, px: number, py: number) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), btnMat);
      m.position.set(px, py, 0);
      m.castShadow = true;
      group.add(m);
    }
    addBtn(0.055, 0.44, 0.12,  W / 2 + 0.055,  0.55);
    addBtn(0.055, 0.22, 0.12, -W / 2 - 0.055,  1.55);
    addBtn(0.055, 0.40, 0.12, -W / 2 - 0.055,  0.72);
    addBtn(0.055, 0.40, 0.12, -W / 2 - 0.055, -0.08);

    // Camera bump
    const camBump = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.72, 0.06),
      new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.85, metalness: 0.0 })
    );
    camBump.position.set(-0.45, H / 2 - 0.65, -(D / 2) - 0.053);
    camBump.castShadow = true;
    group.add(camBump);

    ([ [-0.17, -0.17], [-0.17, 0.17], [0.17, -0.17], [0.17, 0.17] ] as [number, number][]).forEach(([ox, oy]) => {
      const lens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.085, 0.085, 0.05, 64),
        new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.2, metalness: 0.1 })
      );
      lens.rotation.x = Math.PI / 2;
      lens.position.set(-0.45 + ox, H / 2 - 0.65 + oy, -(D / 2) - 0.08);
      group.add(lens);
    });


    // ─── Mouse tracking ────────────────────────────────────────────────────────
    let mx = 0, my = 0, tx = 0, ty = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      my = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // ─── Resize ────────────────────────────────────────────────────────────────
    const resizeObserver = new ResizeObserver(() => {
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
    });
    resizeObserver.observe(container);

    // ─── Animate ───────────────────────────────────────────────────────────────
    const DEFAULT_RX = restRX;
    const DEFAULT_RZ = restRZ;
    let BASE_RX = DEFAULT_RX;
    let BASE_RZ = DEFAULT_RZ;
    // Intro starts from the "opposite" of the resting position for a nice transition.
    // If resting is upright (1.063), intro starts flat; if resting is flat, intro starts upright.
    // If explicit start rotation provided, use it; otherwise default to opposite of rest.
    // isUpright: resting in the upright/facing-camera orientation (restRX ≈ π - 1.063 ≈ 2.08)
    const isUpright = restRX > Math.PI / 2;
    const START_RX = startRX ?? (isUpright ? -Math.PI / 2 : 1.063);
    const START_RZ = startRZ ?? (isUpright ? Math.PI / 2.8 : 2.70);
    group.rotation.x = START_RX;
    group.rotation.z = START_RZ;
    const INTRO_MS = 2200;       // duration of intro animation
    const introStart = Date.now();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;

      // Ease-out cubic intro: blend from upright to resting orientation
      const elapsed = Date.now() - introStart;
      const t = Math.min(elapsed / INTRO_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const introRX = START_RX + (BASE_RX - START_RX) * eased;
      const introRZ = START_RZ + (BASE_RZ - START_RZ) * eased;

      group.rotation.x = introRX + ty * 0.12 * eased;
      group.rotation.y = restRY;
      group.rotation.z = introRZ + tx * 0.12 * eased;
      const isMobile = window.innerWidth <= 599;
      const activeX = isMobile ? (mobileRestX ?? 0) : restX;
      const activeY = isMobile ? (mobileRestY ?? restY) : restY;
      const activeScale = isMobile ? (mobileRestScale ?? restScale) : restScale;
      const p = (window as any).__device ?? { x: activeX, y: activeY, scale: activeScale, rx: DEFAULT_RX, rz: DEFAULT_RZ };
      BASE_RX = p.rx ?? DEFAULT_RX;
      BASE_RZ = p.rz ?? DEFAULT_RZ;
      group.scale.setScalar(3.5 - (3.5 - (p.scale ?? activeScale)) * eased);
      group.position.x = (p.x ?? activeX) * eased;
      group.position.y = p.y ?? activeY;
      keyLight.position.set(8 - tx * 3, 4, -6 + ty * 3);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={`device3dContainer${bgClass ? ` ${bgClass}` : ''}`} />;
};
