const tecnologias = [
  { nombre: 'React', icono: '⚛️', color: '#06b6d4' },
  { nombre: 'TypeScript', icono: '📘', color: '#8b5cf6' },
  { nombre: 'Java', icono: '☕', color: '#f89820' },
  { nombre: 'Python', icono: '🐍', color: '#3776ab' },
  { nombre: 'JavaScript', icono: '💛', color: '#f7df1e' },
  { nombre: 'SQL', icono: '🗄️', color: '#00758f' },
  { nombre: 'MySQL', icono: '🐬', color: '#4479a1' },
  { nombre: 'PostgreSQL', icono: '🐘', color: '#336791' },
  { nombre: 'HTML5', icono: '🧱', color: '#e34f26' },
  { nombre: 'CSS3', icono: '🎨', color: '#ec4899' },
  { nombre: 'Git', icono: '🌿', color: '#10b981' },
  { nombre: 'Vite', icono: '⚡', color: '#8b5cf6' },
]

export default function Inicio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="inicio" className="fade-in" style={{ background: 'transparent', boxShadow: 'none', paddingTop: 0 }}>
      <div className="hero-bg" />
      <div className="inicio-portada">
        <div className="inicio-info">
          <h1>Hola, soy Gabriel Mayorga</h1>
          <h2>Estudiante de Ingeniería en Informática</h2>
          <p>
            Estudiante de segundo año, apasionado por el desarrollo web y la programación.<br />
            Experiencia en <strong>Java, Python, JavaScript y Bases de Datos</strong>.<br />
            Desarrollé un prototipo de app para mi universidad y diversos proyectos web.<br />
            ¡Bienvenido a mi portafolio!
          </p>
          
          {/* Botones ultra elegantes - Premium */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button 
                onClick={() => scrollToSection('sobre-mi')}
                style={{ 
                  flex: '1 1 200px',
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #c9a961, #f4e5c2)',
                  color: '#0a0a0a',
                  border: '2px solid transparent',
                  borderRadius: 8,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(201, 169, 97, 0.3)',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontFamily: 'Lato, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(201, 169, 97, 0.5)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f4e5c2, #c9a961)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(201, 169, 97, 0.3)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, #c9a961, #f4e5c2)'
                }}
              >
                <span>◆</span> Sobre mí
              </button>
              
              <button 
                onClick={() => scrollToSection('proyectos')}
                style={{ 
                  flex: '1 1 200px',
                  padding: '14px 32px',
                  background: 'transparent',
                  color: '#c9a961',
                  border: '2px solid #c9a961',
                  borderRadius: 8,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontFamily: 'Lato, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #c9a961, #f4e5c2)'
                  e.currentTarget.style.color = '#0a0a0a'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(201, 169, 97, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#c9a961'
                  e.currentTarget.style.borderColor = '#c9a961'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <span>◆</span> Proyectos
              </button>
            </div>
            
            <button 
              onClick={() => scrollToSection('contacto')}
              style={{ 
                padding: '14px 32px',
                background: 'rgba(201, 169, 97, 0.1)',
                color: '#c9a961',
                border: '2px solid #c9a961',
                borderRadius: 8,
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(201, 169, 97, 0.2)',
                transition: 'all 0.4s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: 'Lato, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(201, 169, 97, 0.4)'
                e.currentTarget.style.background = 'linear-gradient(135deg, #c9a961, #f4e5c2)'
                e.currentTarget.style.color = '#0a0a0a'
                e.currentTarget.style.borderColor = 'transparent'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(201, 169, 97, 0.2)'
                e.currentTarget.style.background = 'rgba(201, 169, 97, 0.1)'
                e.currentTarget.style.color = '#c9a961'
                e.currentTarget.style.borderColor = '#c9a961'
              }}
            >
              <span>◆</span> Contáctame
            </button>
          </div>

          {/* Redes sociales */}
          <div className="inicio-redes" style={{ marginTop: 32 }}>
            <a href="https://github.com/elAce666" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ fontSize: '2rem', transition: 'all 0.3s' }}>
              <span role="img" aria-label="GitHub">🐙</span>
            </a>
            <a href="https://linkedin.com/in/gabrielmayorga" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ fontSize: '2rem', transition: 'all 0.3s' }}>
              <span role="img" aria-label="LinkedIn">💼</span>
            </a>
            <a href="mailto:gabriel@email.com" title="Email" style={{ fontSize: '2rem', transition: 'all 0.3s' }}>
              <span role="img" aria-label="Email">✉️</span>
            </a>
          </div>
        </div>
        <img
          src="/yo.jpg?v=2"
          alt="Gabriel Mayorga - Foto profesional"
          className="inicio-foto"
        />
      </div>
      
      {/* Sección de Tecnologías - Premium */}
      <div style={{ maxWidth: 1200, margin: '64px auto', padding: '0 24px' }}>
        <h3 style={{ 
          background: 'linear-gradient(135deg, #c9a961, #f4e5c2, #c9a961)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          fontWeight: 300, 
          fontSize: '2rem', 
          marginBottom: 48, 
          textAlign: 'center',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          fontFamily: 'Playfair Display, serif'
        }}>
          Habilidades Técnicas
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 24 }}>
          {tecnologias.map((tech) => (
            <div 
              key={tech.nombre} 
              style={{ 
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%)',
                borderRadius: 12, 
                padding: '28px 20px', 
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
                border: `1px solid rgba(201, 169, 97, 0.2)`,
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = `0 12px 35px rgba(201, 169, 97, 0.4)`
                e.currentTarget.style.borderColor = '#c9a961'
                e.currentTarget.style.background = `linear-gradient(135deg, rgba(201, 169, 97, 0.15) 0%, rgba(26, 26, 26, 0.95) 100%)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.6)'
                e.currentTarget.style.borderColor = 'rgba(201, 169, 97, 0.2)'
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 26, 26, 0.9) 100%)'
              }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: 12, filter: 'drop-shadow(0 4px 8px rgba(201, 169, 97, 0.3))' }}>{tech.icono}</div>
              <div style={{ 
                color: '#ffffff', 
                fontWeight: 500, 
                fontSize: '0.9rem',
                letterSpacing: '1px',
                fontFamily: 'Lato, sans-serif'
              }}>{tech.nombre}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
