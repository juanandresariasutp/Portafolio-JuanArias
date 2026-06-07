import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const words = ['Ingeniero de Sistemas', 'Desarrollador Fullstack', 'Creador de Soluciones'];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // velocidad al escribir (ms por letra)
  const deletingSpeed = 50; // velocidad al borrar (ms por letra)
  const pauseDuration = 2000; // tiempo que la palabra queda completa en pantalla (ms)

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting && currentText === currentWord) {
      // Si la palabra está completa, pausamos antes de empezar a borrar
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === '') {
      // Si se terminó de borrar, pasamos a la siguiente palabra
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else {
      // Si está a medio camino, escribimos o borramos la siguiente letra
      const delta = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prevText) =>
          isDeleting
            ? currentWord.substring(0, prevText.length - 1)
            : currentWord.substring(0, prevText.length + 1)
        );
      }, delta);
    }

    // Limpieza del timer para evitar fugas de memoria si el componente se actualiza
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section className="hero-section" id="home">
      {/* Esferas de brillo decorativas en el fondo */}
      <div className="hero-background">
        <div className="glow-sphere sphere-1"></div>
        <div className="glow-sphere sphere-2"></div>
      </div>
      
      <div className="container hero-container-layout">
        <div className="hero-content">
          <span className="hero-subtitle">Hola, mi nombre es</span>
          <h1 className="hero-title">Juan Andrés Arias</h1>
          <h2 className="hero-typing">
            Y soy <span className="typed-text">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Ingeniero de Sistemas especializado en el desarrollo Fullstack. Me apasiona construir aplicaciones web modernas, seguras y altamente escalables, cuidando tanto la lógica del backend como la estética y la interactividad del frontend.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-premium">Ver Proyectos</a>
            <a href="#contact" className="btn-outline">Contactar</a>
          </div>
        </div>
      </div>
    </section>
  );
}
