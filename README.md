# Portafolio de Ingeniería de Sistemas

Portafolio profesional construido con React y Vite para presentar experiencia, habilidades, proyectos, línea de tiempo profesional y un formulario de contacto con validación visual.

El objetivo de este proyecto es servir como carta de presentación técnica y, al mismo tiempo, como base práctica para aprender arquitectura frontend moderna, componentes reutilizables, diseño responsive y despliegue continuo.

## Características principales

- Diseño visual moderno con soporte de tema claro y oscuro.
- Sección Hero con efecto de escritura y llamadas a la acción.
- Bloque “Sobre mí” con filtro de habilidades por áreas.
- Cuadrícula de proyectos con tarjetas y modal de detalle.
- Línea de tiempo profesional con hitos académicos y laborales.
- Formulario de contacto con validación y estados de envío.
- Animaciones de entrada al hacer scroll.
- Metadatos SEO y soporte para vistas previas en redes sociales.

## Stack tecnológico

- React 19
- Vite 8
- JavaScript moderno
- CSS moderno con variables globales
- ESLint 10
- React DOM
- Intersection Observer para animaciones de scroll
- Vercel para despliegue

## Estructura del proyecto

```text
.
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── eslint.config.js
├── public/
└── src/
	├── App.jsx
	├── main.jsx
	├── index.css
	├── assets/
	├── components/
	│   ├── About.css
	│   ├── About.jsx
	│   ├── Contact.css
	│   ├── Contact.jsx
	│   ├── Header.css
	│   ├── Header.jsx
	│   ├── Hero.css
	│   ├── Hero.jsx
	│   ├── ProjectCard.jsx
	│   ├── ProjectModal.css
	│   ├── ProjectModal.jsx
	│   ├── Projects.css
	│   ├── Projects.jsx
	│   ├── ScrollReveal.jsx
	│   ├── Timeline.css
	│   └── Timeline.jsx
	├── context/
	│   └── ThemeContext.jsx
	└── hooks/
		└── useIntersectionObserver.js
```

## Estructura funcional

- App.jsx: compone el layout principal y el proveedor del tema.
- main.jsx: punto de entrada de React.
- index.css: sistema global de diseño, variables y utilidades.
- components/: contiene las secciones visuales del portafolio.
- context/: concentra el estado global de tema.
- hooks/: alberga lógica reutilizable para animaciones y observación del scroll.

## Requisitos previos

- Node.js 18 o superior.
- npm instalado.

## Instalación y ejecución local

```bash
npm install
npm run dev
```

## Scripts disponibles

- npm run dev: levanta el servidor de desarrollo.
- npm run build: genera la versión de producción en dist.
- npm run preview: previsualiza el build generado.
- npm run lint: ejecuta ESLint sobre el proyecto.

## Despliegue en Vercel

El proyecto está listo para desplegarse como sitio estático con Vite.

Configuración recomendada en Vercel:

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist

Pasos sugeridos:

1. Sube el proyecto a GitHub.
2. Entra a Vercel y crea un nuevo proyecto desde el repositorio.
3. Verifica que el preset sea Vite.
4. Confirma el comando de build y la carpeta de salida.
5. Haz deploy.

Si más adelante agregas rutas con React Router, será recomendable añadir una regla de rewrite para que todas las rutas apunten a index.html.

## SEO y accesibilidad

Este proyecto incluye:

- lang en español en el documento principal.
- title descriptivo.
- meta description.
- metadatos Open Graph y Twitter Card.
- viewport responsive.


