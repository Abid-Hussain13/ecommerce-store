import React, { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { pathname, search } = useLocation();
  const [displayLocation, setDisplayLocation] = useState(pathname + search);
  const [transitionStage, setTransitionStage] = useState('fade-in');

  useEffect(() => {
    if (pathname + search !== displayLocation) {
      setTransitionStage('fade-out');
    }
  }, [pathname, search, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fade-out') {
      const timer = setTimeout(() => {
        setDisplayLocation(pathname + search);
        setTransitionStage('fade-in');
        window.scrollTo(0, 0);
      }, 300); // Faster transition
      return () => clearTimeout(timer);
    }
  }, [transitionStage, pathname, search]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        transitionStage === 'fade-in' ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
