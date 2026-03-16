import React, { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  showLine?: boolean;
  key?: string;
}

const SectionReveal: React.FC<SectionRevealProps> = ({ children, className = '', showLine = true, key }) => {
  const addToReveal = useScrollReveal();

  return (
    <div
      ref={addToReveal}
      className="relative reveal w-full"
      key={key}
    >
      {showLine && (
        <div className="absolute left-0 top-0 w-[1px] bg-gold origin-top transition-all duration-1000 ease-out h-0 [.revealed_&]:h-full hidden lg:block" />
      )}
      <div className={`w-full ${showLine ? 'pl-0 lg:pl-12' : ''} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionReveal;
