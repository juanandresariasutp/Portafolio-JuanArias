import { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'fullstack', name: 'Fullstack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend / API' }
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Creati Store',
      description: 'Plataforma e-commerce completa con catálogo, carrito de compras, login con Email/Google, checkout y un panel administrativo para la gestión de productos e inventario.',
      tags: ['React 19', 'TypeScript', 'Firebase Auth', 'Firestore', 'AWS S3 (Presigned URLs)', 'Vitest'],
      category: 'fullstack',
      repoUrl: 'https://github.com/juanandresariasutp/ProyectoM5_JuanArias',
      liveUrl: 'https://proyecto-m5-sable.vercel.app/',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)', // Coral a naranja
      details: {
        challenge: 'Asegurar una carga rápida de productos e imágenes pesadas sin sobrecargar el frontend ni comprometer la seguridad del bucket de almacenamiento.',
        solution: 'Integración de AWS S3 mediante Serverless Functions en Vercel para generar "Presigned URLs" seguras de subida y lectura temporal de imágenes, optimizando la persistencia en Firebase Firestore.'
      }
    },
    {
      id: 2,
      title: 'Vegeta SPA',
      description: 'Single Page Application interactiva con temática de Vegeta (Dragon Ball Z) que integra un chat interactivo con IA y un enrutamiento dinámico nativo del navegador.',
      tags: ['Vanilla JS', 'HTML5', 'CSS3', 'Gemini API', 'History API', 'Vercel Serverless'],
      category: 'fullstack',
      repoUrl: 'https://github.com/juanandresariasutp/ProyectoM3_JuanArias',
      liveUrl: 'https://vegeta-chat-spa.vercel.app/home', // Enlace de fallback o demo en vivo
      gradient: 'linear-gradient(135deg, #1d4ed8 0%, #facc15 100%)', // Azul real a amarillo DBZ
      details: {
        challenge: 'Crear una navegación SPA fluida e historial funcional del navegador sin depender de librerías como React Router, y conectar de forma segura la API de Gemini.',
        solution: 'Diseño de un enrutador JS a medida utilizando History API (pushState/popstate) y despliegue de Vercel Functions para actuar como proxy e intermediario seguro con la Gemini API.'
      }
    },
    {
      id: 3,
      title: 'MiniBlog API',
      description: 'API REST robusta para la gestión de autores y posts de un miniblog. Cuenta con validaciones de esquemas de datos, manejo de errores centralizado y documentación interactiva.',
      tags: ['Node.js', 'Express.js', 'PostgreSQL', 'pg Driver', 'Vitest', 'Supertest', 'Swagger UI'],
      category: 'backend',
      repoUrl: 'https://github.com/juanandresariasutp/ProyectoM2_JuanArias',
      liveUrl: 'https://delightful-charisma-production-1384.up.railway.app/api-docs',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Gris pizarra tecnológico a carbón
      details: {
        challenge: 'Garantizar la consistencia de los datos, relaciones de base de datos seguras y cobertura de pruebas completa para peticiones HTTP.',
        solution: 'Implementación de pruebas unitarias y de integración exhaustivas con Vitest + Supertest, modularización del ruteo en Express, y documentación OpenAPI renderizada en Swagger.'
      }
    },
    {
      id: 4,
      title: 'Landing CreatiBros',
      description: 'Sitio corporativo responsivo para una agencia de contenidos y marketing, diseñado para la presentación de portafolio de servicios y carga de assets dinámicos.',
      tags: ['Next.js 13', 'TypeScript', 'Tailwind CSS', 'Cloudinary API'],
      category: 'frontend',
      repoUrl: 'https://github.com/juanandresariasutp/landing_CreatiBros',
      liveUrl: 'https://creatibros.vercel.app/',
      gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)', // Cian neón a azul
      details: {
        challenge: 'Ofrecer una experiencia fluida al usuario final cargando reels multimedia pesados y optimizando imágenes dinámicas subidas por la agencia.',
        solution: 'Uso de Next.js Server Components para optimización SEO, combinando la compresión y entrega rápida de assets multimedia mediante el CDN de Cloudinary.'
      }
    },
    {
      id: 5,
      title: 'Gestor de Tareas',
      description: 'Aplicación minimalista mobile-first para la organización de actividades personales o de equipo con notificaciones asíncronas por correo electrónico.',
      tags: ['React 19', 'TypeScript', 'Firebase Auth', 'Firestore', 'AWS SES', 'React Router 7'],
      category: 'fullstack',
      repoUrl: 'https://github.com/juanandresariasutp/ProyectoM4_JuanArias',
      liveUrl: 'https://proyecto-m4-juan-arias.vercel.app',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', // Índigo a púrpura
      details: {
        challenge: 'Desarrollar un flujo de actualización instantáneo (Kanban) y sincronizar el disparo de correos de resumen semanal sin bloquear el hilo principal.',
        solution: 'Uso de Snapshot Listeners de Firestore para cambios reactivos en vivo, y Vercel Cron-jobs conectados a AWS SES (Simple Email Service) para el despacho asíncrono de resúmenes.'
      }
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>

        {/* Filtro de Categorías */}
        <div className="projects-filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cuadrícula de Tarjetas de Proyectos */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={() => onSelectProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
