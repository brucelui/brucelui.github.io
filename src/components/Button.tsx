import type { ReactNode } from 'react';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" aria-hidden="true">
    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
  </svg>
);

interface ButtonProps {
  href: string;
  children: ReactNode;
  withArrow?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const Button = ({ href, children, withArrow = false, target, rel, onClick }: ButtonProps) => (
  <a href={href} className="formbutton" target={target} rel={rel} onClick={onClick}>
    {children}
    {withArrow && <ArrowIcon />}
  </a>
);
