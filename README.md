# Portafolio Gabriel — React + TypeScript + Vite + Karma/Jasmine

Este proyecto es un portafolio con las secciones requeridas: Inicio, Sobre mí, Proyectos y Contacto. Usa React + TypeScript con Vite, y pruebas unitarias con Karma + Jasmine.

## Scripts

- Desarrollo: inicia el servidor con recarga en caliente.

```powershell
npm run dev
```

- Build de producción: genera la carpeta `dist`.

```powershell
npm run build
```

- Previsualización del build:

```powershell
npm run preview
```

- Pruebas unitarias (Karma + Jasmine):

```powershell
npm test
```

- Pruebas en watch (útil durante desarrollo):

```powershell
npm run test:watch
```

## Estructura de secciones

- `src/sections/Inicio.tsx` — Bienvenida y descripción corta.
- `src/sections/SobreMi.tsx` — Perfil y habilidades.
- `src/sections/Proyectos.tsx` — Lista simple de proyectos.
- `src/sections/Contacto.tsx` — Formulario básico (sin backend).

Navegación simple incluida en `src/components/Navbar.tsx`; se monta en `src/App.tsx`.

## Pruebas

- `src/App.test.tsx` — Verifica navegación Inicio → Contacto.
- `src/sections/Contacto.test.tsx` — Verifica envío del formulario y mensaje de confirmación.

Karma está configurado en `karma.conf.mjs` con `esbuild` para compilar TypeScript/TSX.

## Notas

- Se usa ChromeHeadless para ejecutar las pruebas.
- Si Chrome no está instalado, instala Google Chrome o ajusta el `browsers` en `karma.conf.mjs`.

