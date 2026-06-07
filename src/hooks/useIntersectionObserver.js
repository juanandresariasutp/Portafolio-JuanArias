import { useState, useEffect } from 'react';

export default function useIntersectionObserver(elementRef, options = { threshold: 0.15, rootMargin: '0px' }) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Cuando el elemento es visible en pantalla
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Una vez que se revela, dejamos de observarlo para que la animación sea permanente
        observer.unobserve(currentElement);
      }
    }, options);

    observer.observe(currentElement);

    // Limpieza al desmontar el componente
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options.threshold, options.rootMargin]); // Dependencias simplificadas para evitar reinicializaciones

  return isIntersecting;
}
