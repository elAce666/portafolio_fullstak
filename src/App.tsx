import { useState } from 'react'
import './App.css'
import { Navbar, type Section } from './components/Navbar'
import Inicio from './sections/Inicio'
import SobreMi from './sections/SobreMi'
import Proyectos from './sections/Proyectos'
import Contacto from './sections/Contacto'

function App() {
  const [section, setSection] = useState<Section>('inicio')
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <Navbar onNavigate={setSection} darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="main-content">
        {section === 'inicio' && <Inicio />}
        {section === 'sobre-mi' && <SobreMi />}
        {section === 'proyectos' && <Proyectos />}
        {section === 'contacto' && <Contacto />}
      </div>
    </div>
  )
}

export default App
