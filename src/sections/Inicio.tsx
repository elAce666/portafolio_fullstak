export default function Inicio() {
  return (
    <section className="fade-in" style={{ background: 'transparent', boxShadow: 'none', paddingTop: 0 }}>
      <div className="hero-bg" />
      <div className="inicio-portada">
        <div className="inicio-info">
          <h1>Hola, soy Gabriel Mayorga</h1>
          <h2>Fullstack Developer</h2>
          <p>
            Soy un profesional apasionado por la tecnología y el desarrollo web, especializado en React, TypeScript y Node.js.<br />
            Mi objetivo es crear soluciones modernas, eficientes y accesibles.<br />
            ¡Bienvenido a mi portafolio!
          </p>
          <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
            <a href="#sobre-mi" className="btn-leer-mas" style={{ textDecoration: 'none' }}>
              <span role="img" aria-label="Perfil">👤</span> Sobre mí
            </a>
            <a href="#proyectos" className="btn-leer-mas" style={{ textDecoration: 'none', background: 'transparent', border: '2px solid #1677ff', color: '#1677ff' }}>
              <span role="img" aria-label="Proyectos">💼</span> Proyectos
            </a>
          </div>
          <div className="inicio-redes">
            <a href="https://github.com/elAce666" target="_blank" rel="noopener" title="GitHub">
              <span role="img" aria-label="GitHub">🐙</span>
            </a>
            <a href="https://linkedin.com/in/gabrielmayorga" target="_blank" rel="noopener" title="LinkedIn">
              <span role="img" aria-label="LinkedIn">💼</span>
            </a>
            <a href="mailto:gabriel@email.com" title="Email">
              <span role="img" aria-label="Email">✉️</span>
            </a>
          </div>
        </div>
        <img
          src="/yo.jpg"
          alt="Foto personal"
          className="inicio-foto"
        />
      </div>
    </section>
  )
}
