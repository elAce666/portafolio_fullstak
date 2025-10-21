# 💼 Portafolio Profesional - Gabriel Mayorga

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Portafolio elegante y profesional con diseño dorado premium**

[🌐 Ver Demo](https://elace666.github.io/portafolio_fullstak) | [📝 Documentación](#-características)

</div>

---

## 📋 Descripción

Portafolio personal full-stack desarrollado con las tecnologías más modernas. Presenta un diseño elegante con paleta de colores dorados, animaciones suaves, modo oscuro/claro, y arquitectura profesional con custom hooks y pruebas unitarias.

### ✨ Características Principales

- 🎨 **Diseño Premium**: Paleta de colores dorados (#c9a961) con tipografía elegante (Playfair Display + Lato)
- 🌓 **Modo Oscuro/Claro**: Toggle persistente con localStorage
- 🎭 **Animaciones Suaves**: Efectos de scroll reveal con IntersectionObserver
- 📱 **Responsive Design**: Optimizado para todos los dispositivos
- ⚡ **Performance**: Vite para HMR ultra-rápido
- 🧪 **Testing**: Cobertura con Karma + Jasmine
- 🎯 **TypeScript**: Type-safety en todo el proyecto
- 🏗️ **Arquitectura Limpia**: Custom hooks y separación de responsabilidades

---

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js** 18+ ([Descargar](https://nodejs.org/))
- **npm** 11+ (incluido con Node.js)
- **Google Chrome** (para ejecutar pruebas)

### Instalación

```powershell
# 1. Clonar el repositorio
git clone https://github.com/elAce666/portafolio_fullstak.git

# 2. Navegar al directorio
cd portafolio_fullstak

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en **http://localhost:5173/**

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Compila para producción en `dist/` |
| `npm run preview` | Previsualiza el build de producción |
| `npm test` | Ejecuta pruebas unitarias (single-run) |
| `npm run test:watch` | Ejecuta pruebas en modo watch |

---

## 📁 Estructura del Proyecto

```
portafolio_fullstak/
├── public/
│   ├── vite.svg
│   └── yo.jpg              # Foto profesional
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Navbar.tsx      # Navegación superior fija
│   │   └── Timeline.tsx    # Línea de tiempo educativa
│   ├── hooks/              # 🆕 Custom hooks profesionales
│   │   ├── useDarkMode.ts  # Manejo de tema oscuro/claro
│   │   └── useScrollReveal.ts # Animaciones de scroll
│   ├── sections/
│   │   ├── Inicio.tsx      # Hero + presentación
│   │   ├── SobreMi.tsx     # Perfil + habilidades + stats
│   │   ├── Proyectos.tsx   # Grid de proyectos
│   │   └── Contacto.tsx    # Formulario + info contacto
│   ├── App.css             # Estilos globales + variables
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── *.test.tsx          # Archivos de pruebas
├── karma.conf.mjs          # Configuración de testing
├── tsconfig.json           # Configuración TypeScript
├── vite.config.ts          # Configuración Vite
└── package.json
```

---

## 🎨 Paleta de Colores

### Modo Oscuro
```css
--primary-gold: #c9a961    /* Dorado principal */
--accent-gold: #f4e5c2     /* Champagne claro */
--deep-black: #0a0a0a      /* Fondo principal */
--soft-black: #1a1a1a      /* Tarjetas */
```

### Modo Claro
```css
--bg-light-primary: #f8f6f0    /* Crema elegante */
--bg-light-secondary: #fdfbf7  /* Casi blanco */
--gold-dark: #9d7d42           /* Dorado oscuro */
```

---

## 🧩 Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca UI
- **TypeScript 5.6** - Tipado estático
- **Vite 7.1** - Build tool & dev server

### Estilos
- **CSS Modules** - Estilos con scope
- **Google Fonts** - Playfair Display & Lato
- **CSS Variables** - Theming dinámico

### Testing
- **Karma 6.4** - Test runner
- **Jasmine 5.5** - Framework de testing
- **@testing-library/react** - Testing utilities

### Herramientas
- **ESLint** - Linting
- **Git** - Control de versiones

---

## 🧪 Pruebas Unitarias

El proyecto incluye tests para componentes críticos:

```powershell
# Ejecutar todas las pruebas
npm test

# Modo watch para desarrollo
npm run test:watch
```

### Cobertura de Tests
- ✅ `App.test.tsx` - Renderizado y navegación
- ✅ `Contacto.test.tsx` - Validación de formulario

---

## 📱 Secciones del Portafolio

### 1. **Inicio** 🏠
- Hero con foto profesional
- Descripción y presentación
- Stack tecnológico
- Botones de navegación elegantes

### 2. **Sobre Mí** 👤
- Perfil y biografía
- Formación académica
- Habilidades técnicas
- Estadísticas (año, proyectos)
- Servicios ofrecidos
- Timeline educativa

### 3. **Proyectos** 💻
- Grid de proyectos
- Tarjetas con hover effects
- Badges de tecnologías
- Enlaces a repositorios

### 4. **Contacto** 📧
- Formulario funcional con validación
- Información de contacto
- Enlaces a redes sociales
- Mensaje de confirmación

---

## 🎯 Características Técnicas

### Custom Hooks

#### `useDarkMode`
Maneja el estado del tema oscuro/claro con persistencia en localStorage.

```typescript
const { isDark, toggle } = useDarkMode()
```

#### `useScrollReveal`
Detecta cuando elementos entran en viewport para animaciones.

```typescript
const { ref, isVisible } = useScrollReveal()
```

### Animaciones
- Scroll reveal con IntersectionObserver
- Hover effects en tarjetas
- Transiciones suaves de tema
- Parallax en imágenes

---

## 🌐 Deployment

### GitHub Pages

```powershell
# 1. Build de producción
npm run build

# 2. Configurar vite.config.ts con base correcto
base: '/portafolio_fullstak/'

# 3. Deploy (requiere gh-pages instalado)
npm run deploy
```

### Netlify / Vercel
Simplemente conecta tu repositorio y configura:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

---

## 👨‍💻 Autor

**Gabriel Mayorga**

- 🎓 Estudiante de 2º año - Ingeniería en Informática
- 💼 Desarrollador Full-Stack
- 📧 [Email](mailto:tu-email@example.com)
- 🐙 [GitHub](https://github.com/elAce666)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 🙏 Agradecimientos

- Diseño inspirado en portfolios profesionales modernos
- Iconos y assets de fuentes públicas
- Comunidad de React y TypeScript

---

<div align="center">

**⭐ Si te gustó este proyecto, dale una estrella en GitHub ⭐**

Hecho con ❤️ y mucho ☕ por Gabriel Mayorga

</div>

