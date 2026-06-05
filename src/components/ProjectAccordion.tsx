import { useState } from 'react';
import type { ReactNode } from 'react';

interface ProjectAccordionProps {
  title: string;
  appIconClass: string;
  children: ReactNode;
}

export const ProjectAccordion = ({ title, appIconClass, children }: ProjectAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="projectAccordion">
      <button
        className="projectAccordionToggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={`appIcon ${appIconClass} appIconSm`} aria-hidden="true"></div>
        <h4>{title}</h4>
        <div className="projectAccordionChevronWrapper" aria-hidden="true">
          <span className={`projectAccordionChevron${isOpen ? ' isOpen' : ''}`}></span>
        </div>
      </button>
      <div className={`projectAccordionContent${isOpen ? ' isOpen' : ''}`}>
        <div className="projectAccordionContentInner">
          {children}
        </div>
      </div>
    </div>
  );
};
