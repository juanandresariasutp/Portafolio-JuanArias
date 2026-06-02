import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Renderizado de la Barra de Navegación Global */}
        <Header />

        <main>
          {/* Secciones principales de la SPA */}
          <section id="home">
            {/* Espacio para la landing o parte superior si es necesario */}
          </section>

          <section id="hero">
            <div className="container">
              {/* Aquí se cargará el componente Hero */}
            </div>
          </section>

          <section id="about">
            <div className="container">
              {/* Aquí se cargará el componente About y Skills */}
            </div>
          </section>

          <section id="projects">
            <div className="container">
              {/* Aquí se cargará la sección de Proyectos */}
            </div>
          </section>

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
