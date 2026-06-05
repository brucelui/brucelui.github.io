interface DescriptionIconProps {
  src: string;
}

export const DescriptionIcon = ({ src }: DescriptionIconProps) => (
  <div
    className="projectDescriptionIcon"
    style={{
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
    }}
    aria-hidden="true"
  />
);
