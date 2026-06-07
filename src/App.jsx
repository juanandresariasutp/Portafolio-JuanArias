import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {
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
