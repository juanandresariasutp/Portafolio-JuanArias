import { createContext, useContext, useState, useEffect } from 'react';

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Componente Proveedor que envolverá nuestra aplicación
export function ThemeProvider({ children }) {
  // Inicializar estado del tema revisando localStorage o la preferencia del sistema
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Si no hay tema guardado, verificar la preferencia del sistema operativo
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  // Efecto para actualizar el atributo en el DOM y en localStorage cuando cambie el tema
  useEffect(() => {
    const root = document.documentElement;
    
    // Aplicamos el tema como un atributo de datos HTML (data-theme)
    root.setAttribute('data-theme', theme);
    
    // Opcionalmente podemos alternar clases por si se requiere compatibilidad
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para alternar entre claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Hook personalizado para consumir el tema de forma sencilla y segura
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
}
