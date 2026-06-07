import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null);
  // Observa el contenedor ref
  const isVisible = useIntersectionObserver(ref);

  return (
    <div 
      ref={ref} 
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
