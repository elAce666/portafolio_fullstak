import { useState } from 'react'

type Section = 'inicio' | 'sobre-mi' | 'proyectos' | 'contacto'

interface NavbarProps {
  onNavigate: (s: Section) => void
  darkMode: boolean
  onToggleDarkMode: () => void
}

export function Navbar({ onNavigate, darkMode, onToggleDarkMode }: NavbarProps) {
  const [active, setActive] = useState<Section>('inicio')
  const [isVisible, setIsVisible] = useState(false)

  const go = (s: Section) => {
    setActive(s)
    onNavigate(s)
  }

  return (
    <>
      {/* Trigger para mostrar el navbar */}
      <div 
        className="navbar-trigger"
        onMouseEnter={() => setIsVisible(true)}
        title="Menú"
      />
      
      <nav 
        className={`navbar ${isVisible ? 'visible' : ''}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="brand">Gabriel</div>
        <ul className="nav-links">
          <li className={active === 'inicio' ? 'active' : ''}>
            <button onClick={() => go('inicio')}>Inicio</button>
          </li>
          <li className={active === 'sobre-mi' ? 'active' : ''}>
            <button onClick={() => go('sobre-mi')}>Sobre mí</button>
          </li>
          <li className={active === 'proyectos' ? 'active' : ''}>
            <button onClick={() => go('proyectos')}>Proyectos</button>
          </li>
          <li className={active === 'contacto' ? 'active' : ''}>
            <button onClick={() => go('contacto')}>Contacto</button>
          </li>
          <li>
            <button onClick={onToggleDarkMode} className="theme-toggle" title={darkMode ? 'Modo claro' : 'Modo oscuro'}>
              <span role="img" aria-label="Toggle theme">{darkMode ? '☀️' : '🌙'}</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export type { Section }
