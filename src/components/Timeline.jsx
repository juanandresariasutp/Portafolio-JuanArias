import React from 'react';
import './Timeline.css';

export default function Timeline() {
  // Lista de hitos académicos y profesionales
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Ingeniería de Sistemas y Computación',
      company: 'Universidad Tecnológica de Pereira (UTP)',
      period: '2019 - 2025',
      description: 'Formación académica centrada en ingeniería de software, estructuras de datos, diseño y modelado de bases de datos relacionales, algoritmos complejos y gestión de proyectos informáticos.'
    },
    {
      id: 2,
      type: 'education',
      title: 'Desarrollo Web Full Stack',
      company: 'Soy Henry',
      period: 'Febrero 2026 - Actualidad',
      description: 'Bootcamp intensivo enfocado en el desarrollo web Full Stack, abarcando tecnologías como JavaScript, TypeScript, React, Node.js, Express y bases de datos relacionales. Formación orientada a la construcción de aplicaciones web completas, trabajo colaborativo mediante metodologías ágiles, control de versiones con Git y GitHub, y aplicación de buenas prácticas de desarrollo de software.'
    }
  ];

  return (
    <section className="timeline-section" id="education">
      <div className="container">
        <h2 className="section-title">Trayectoria Académica</h2>

        <div className="timeline-container">
          {experiences.map((item) => (
            <div
              key={item.id}
              className={`timeline-item ${item.type === 'education' ? 'education-item' : 'work-item'}`}
            >
              {/* Círculo indicador con icono */}
              <div className="timeline-dot">
                {item.type === 'education' ? (
                  // Icono de Graduación / Educación
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                ) : (
                  // Icono de Maletín / Trabajo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                )}
              </div>

              {/* Tarjeta informativa */}
              <div className="timeline-card glass-card">
                <span className="timeline-period">{item.period}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-subtitle">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
