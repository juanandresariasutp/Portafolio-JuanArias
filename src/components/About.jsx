import { useState } from 'react';
import './About.css';

export default function About() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Bases de Datos' },
    { id: 'devops', name: 'DevOps & Nube' }
  ];

  const skills = [
    // Frontend
    { name: 'ReactJS', category: 'frontend', level: 90 },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 95 },
    { name: 'HTML5 / CSS3 / Sass', category: 'frontend', level: 95 },
    { name: 'TypeScript', category: 'frontend', level: 80 },
    { name: 'Next.js', category: 'frontend', level: 75 },

    // Backend
    { name: 'Node.js', category: 'backend', level: 85 },
    { name: 'Express.js', category: 'backend', level: 85 },
    { name: 'FastAPI', category: 'backend', level: 75 },
    { name: 'APIs RESTful', category: 'backend', level: 90 },

    // Database
    { name: 'PostgreSQL / MySQL', category: 'database', level: 85 },
    { name: 'Firebase / Supabase', category: 'database', level: 75 },

    // DevOps & Cloud
    { name: 'Git & GitHub', category: 'devops', level: 95 },
    { name: 'AWS (S3)', category: 'devops', level: 70 }
  ];

  // Filtramos la lista de habilidades según la categoría activa
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>

        <div className="about-grid">
          {/* Biografía Card */}
          <div className="about-info glass-card">
            <h3>¿Quién soy?</h3>
            <p>
              Soy un apasionado <strong>Ingeniero de Sistemas y Desarrollador Fullstack</strong> enfocado en diseñar y construir soluciones tecnológicas robustas que resuelvan problemas reales con eficiencia.
            </p>
            <p>
              Me considero un profesional orientado al detalle, que prioriza escribir código limpio, modular y mantenible. Me encanta aprender constantemente y afrontar nuevos retos tecnológicos para seguir creciendo dentro de la industria de software.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">Colombia</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Especialidad:</span>
                <span className="detail-value">Desarrollo Fullstack & Arquitectura</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Intereses:</span>
                <span className="detail-value">Desarrollo web, Inteligencia Artificial, UI/UX</span>
              </div>
            </div>
          </div>

          {/* Habilidades Filtrables */}
          <div className="about-skills">
            <h3>Mis Habilidades</h3>

            {/* Categorías de Filtro */}
            <div className="skills-filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Cuadrícula de Habilidades */}
            <div className="skills-grid">
              {filteredSkills.map((skill) => (
                <div key={skill.name} className="skill-card glass-card">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
