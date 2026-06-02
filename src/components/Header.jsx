import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo del portafolio */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-tag">&lt;</span>
          <span className="logo-text">JuanArias</span>
          <span className="logo-tag">.dev /&gt;</span>
        </a>

        {/* Botón del menú móvil (Hamburguesa) */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menú de Navegación de la SPA */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={closeMenu}>Inicio</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={closeMenu}>Sobre Mí</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link" onClick={closeMenu}>Proyectos</a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link" onClick={closeMenu}>Experiencia</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={closeMenu}>Contacto</a>
            </li>
          </ul>
        </nav>

        {/* Botón de cambio de Modo Claro/Oscuro */}
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme} 
          aria-label="Cambiar tema de color"
        >
          {theme === 'dark' ? (
            // Icono de Sol
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sun-icon">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          ) : (
            // Icono de Luna
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="moon-icon">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
