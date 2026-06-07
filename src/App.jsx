import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Renderizado de la Barra de Navegación Global */}
        <Header />

        <main>
          {/* Sección Hero de Bienvenida */}
          <Hero />

          {/* Sección "Sobre Mí" y Habilidades Filtrables */}
          <About />

          {/* Sección de Proyectos Fullstack */}
          <Projects onSelectProject={setSelectedProject} />

          {/* Modal de Detalles del Proyecto Seleccionado */}
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}

          <section id="experience">
            <div className="container">
              {/* Aquí se cargará la línea de tiempo */}
            </div>
          </section>

          <section id="contact">
            <div className="container">
              {/* Aquí se cargará el formulario de contacto */}
            </div>
          </section>
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
