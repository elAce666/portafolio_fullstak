# 💼 Portafolio Profesional - Gabriel Mayorga

Portafolio personal desarrollado con React, TypeScript y Vite, mostrando mis proyectos, habilidades y experiencia como Fullstack Developer.

## 🚀 Características

- ✨ Diseño moderno y profesional
- 🎨 Modo oscuro/claro
- 📱 Diseño responsive (móvil, tablet, desktop)
- ⚡ Rendimiento optimizado con Vite
- 🎯 TypeScript para type safety
- 🧪 Testing con Karma y Jasmine
- 🎭 Animaciones suaves y transiciones
- 📬 Formulario de contacto con validaciones

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite 7
- **UI Framework:** Ant Design
- **Testing:** Karma, Jasmine, Testing Library
- **Linting:** ESLint
- **Estilos:** CSS3 con CSS-in-JS

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/elAce666/portafolio_fullstak.git
cd portafolio_fullstak
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm run preview` - Previsualiza la build de producción
- `npm run test` - Ejecuta los tests
- `npm run lint` - Ejecuta el linter

## 📂 Estructura del Proyecto

```
portafolio_fullstak/
├── public/              # Archivos estáticos
│   ├── vite.svg
│   └── yo.jpg          # Foto de perfil
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.tsx
│   │   └── Timeline.tsx
│   ├── sections/        # Secciones de la página
│   │   ├── Inicio.tsx
│   │   ├── SobreMi.tsx
│   │   ├── Proyectos.tsx
│   │   └── Contacto.tsx
│   ├── App.tsx         # Componente principal
│   ├── App.css         # Estilos globales
│   └── main.tsx        # Punto de entrada
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Secciones del Portafolio

### 🏠 Inicio
- Presentación personal
- Enlaces a redes sociales
- Tecnologías destacadas con iconos animados

### 👤 Sobre Mí
- Información personal y profesional
- Experiencia y habilidades
- Estadísticas y logros
- Timeline visual de trayectoria

### 💼 Proyectos
- Proyectos destacados con:
  - Descripción detallada
  - Tecnologías utilizadas
  - Enlaces a demo y repositorio GitHub

### 📬 Contacto
- Formulario de contacto con validaciones
- Información de contacto
- Enlaces a redes sociales

## 🌐 Deploy

Para deployar en producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`

Puedes deployar en:
- **Vercel:** `vercel`
- **Netlify:** Arrastra la carpeta `dist`
- **GitHub Pages:** Configura el workflow de GitHub Actions

## 📝 Personalización

Para personalizar el portafolio:

1. **Información personal:** Edita `src/sections/Inicio.tsx` y `src/sections/SobreMi.tsx`
2. **Proyectos:** Modifica el array `proyectos` en `src/sections/Proyectos.tsx`
3. **Experiencia:** Actualiza el array `hitos` en `src/components/Timeline.tsx`
4. **Estilos:** Personaliza colores y diseño en `src/App.css`
5. **Foto de perfil:** Reemplaza `public/yo.jpg` con tu foto

## 🎨 Mejoras Implementadas

- ✅ Sección de Proyectos con 4 proyectos completos con tecnologías y enlaces
- ✅ Timeline visual interactivo con iconos y colores por categoría
- ✅ Formulario de contacto con validaciones completas
- ✅ Sección de tecnologías con animaciones hover
- ✅ Diseño responsive para móviles y tablets
- ✅ README profesional y documentado

## 👨‍💻 Autor

**Gabriel Mayorga**
- GitHub: [@elAce666](https://github.com/elAce666)
- LinkedIn: [Gabriel Mayorga](https://linkedin.com/in/gabrielmayorga)
- Email: gabriel@email.com

---

⭐ Si te gustó este proyecto, ¡no olvides darle una estrella!
