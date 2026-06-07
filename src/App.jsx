import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import ScrollReveal from './components/ScrollReveal'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Renderizado de la Barra de Navegación Global */}
        <Header />

        <main>
          {/* Sección Hero de Bienvenida (se muestra de entrada sin retraso) */}
          <Hero />

          {/* Sección "Sobre Mí" con animación al hacer scroll */}
          <ScrollReveal>
            <About />
          </ScrollReveal>

          {/* Sección de Proyectos con animación al hacer scroll */}
          <ScrollReveal>
            <Projects onSelectProject={setSelectedProject} />
          </ScrollReveal>

          {/* Modal de Detalles del Proyecto Seleccionado (Portal) */}
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}

          {/* Sección de Cronología Profesional con animación al hacer scroll */}
          <ScrollReveal>
            <Timeline />
          </ScrollReveal>

          {/* Sección de Contacto con animación al hacer scroll */}
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </main>

        <footer>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} - Juan Andrés Arias. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
