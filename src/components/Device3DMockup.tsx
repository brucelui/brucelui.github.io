import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Device3DMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // ─── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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
    camera.position.set(4.2, 5.5, 5.5);
    camera.lookAt(0, 0, 0);

    // ─── Lights ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(-6, 10, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(4096, 4096);
    keyLight.shadow.camera.near   = 1;
    keyLight.shadow.camera.far    = 25;
    keyLight.shadow.camera.left   = -5;
    keyLight.shadow.camera.right  = 5;
    keyLight.shadow.camera.top    = 5;
    keyLight.shadow.camera.bottom = -5;
    keyLight.shadow.radius = 1.5;
    keyLight.shadow.bias   = -0.0003;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.25);
    rimLight.position.set(6, 2, -6);
    scene.add(rimLight);

    // ─── Ground shadow plane ───────────────────────────────────────────────────
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.ShadowMaterial({ opacity: 0.35 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.22;
    ground.receiveShadow = true;
    scene.add(ground);

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
    const Z_SCREEN = Z_FRONT + 0.004;
    void Z_SCREEN; // used only as reference comment in original

    // ─── Materials ─────────────────────────────────────────────────────────────
    const matteMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.88, metalness: 0.0 });
    const btnMat   = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.90, metalness: 0.0 });

    // ─── Device group ──────────────────────────────────────────────────────────
    const group = new THREE.Group();
    group.rotation.x = -Math.PI / 2;
    group.rotation.z =  Math.PI / 2.8;
    scene.add(group);

    // Body
    const bodyMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(roundedRect(W, H, CR), {
        depth: D,
        bevelEnabled:   true,
        bevelThickness: 0.055,
        bevelSize:      0.055,
        bevelSegments:  12,
      }),
      matteMat
    );
    bodyMesh.position.z = Z_BACK;
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    group.add(bodyMesh);

    // Black front cap
    const frontCap = new THREE.Mesh(
      new THREE.ShapeGeometry(roundedRect(W, H, CR), 48),
      new THREE.MeshStandardMaterial({
        color: 0x080808,
        roughness: 0.5,
        metalness: 0.0,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      })
    );
    frontCap.position.z = Z_FRONT;
    group.add(frontCap);

    // Screen
    const screenMesh = new THREE.Mesh(
      new THREE.ShapeGeometry(roundedRect(W - 0.14, H - 0.14, CR - 0.07), 48),
      new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.92,
        metalness: 0.0,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      })
    );
    screenMesh.position.z = Z_FRONT;
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
        new THREE.CylinderGeometry(0.085, 0.085, 0.05, 32),
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
    const BASE_RX = -Math.PI / 2;
    const BASE_RZ =  Math.PI / 2.8;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;
      group.rotation.x = BASE_RX + ty * 0.12;
      group.rotation.z = BASE_RZ + tx * 0.12;
      group.position.y = Math.sin(Date.now() * 0.0008) * 0.06;
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

  return <div ref={containerRef} className="device3dContainer" />;
};
