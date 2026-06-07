import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  // Evitar scroll en la página de fondo mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Permitir cerrar el modal al pulsar la tecla Escape (ESC)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Función de limpieza para restaurar el scroll y remover el listener de teclado
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { title, description, tags, repoUrl, liveUrl, gradient, details } = project;

  return createPortal(
    // Overlay de fondo (clic en el fondo oscuro cierra el modal)
    <div className="modal-overlay" onClick={onClose}>
      
      {/* Contenedor del Modal (evita que el clic dentro del modal lo cierre) */}
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Cabecera con el degradado del proyecto */}
        <div className="modal-header" style={{ background: gradient }}>
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar ventana">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="modal-body">
          <div className="modal-section">
            <h3>Descripción</h3>
            <p>{description}</p>
          </div>

          {details && (
            <>
              <div className="modal-section">
                <h3>El Desafío Técnico</h3>
                <p>{details.challenge}</p>
              </div>
              <div className="modal-section">
                <h3>La Solución Implementada</h3>
                <p>{details.solution}</p>
              </div>
            </>
          )}

          <div className="modal-section">
            <h3>Tecnologías del Proyecto</h3>
            <div className="modal-tags">
              {tags.map((tag) => (
                <span key={tag} className="modal-tag-item">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer del Modal con Enlaces Externos */}
        <div className="modal-footer">
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              Código fuente
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-btn primary-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Sitio en vivo
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body // Nodo destino del portal de React
  );
}
