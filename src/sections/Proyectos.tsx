type Proyecto = { 
  titulo: string
  descripcion: string
  tecnologias: string[]
  url?: string
  github?: string
  imagen?: string
}

const proyectos: Proyecto[] = [
  { 
    titulo: 'Portafolio Personal Interactivo', 
    descripcion: 'Mi portafolio web desarrollado con React y TypeScript, con diseño moderno, animaciones fluidas y modo oscuro/claro.',
    tecnologias: ['React', 'TypeScript', 'Vite', 'CSS3'],
    github: 'https://github.com/elAce666/portafolio_fullstak',
    imagen: '💼'
  },
  { 
    titulo: 'Página Web Full Stack', 
    descripcion: 'Proyecto full stack con frontend y backend integrado, desarrollado como proyecto universitario.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/elAce666/full-stak-pagina-web',
    imagen: '🌐'
  },
  { 
    titulo: 'Prototipo App Universitaria', 
    descripcion: 'Prototipo de aplicación móvil desarrollada para mi universidad, enfocada en gestión estudiantil.',
    tecnologias: ['Java', 'Mobile Design', 'UI/UX'],
    github: 'https://github.com/elAce666',
    imagen: '📱'
  },
  { 
    titulo: 'Proyecto Python', 
    descripcion: 'Aplicación desarrollada en Python para procesamiento de datos y automatización de tareas.',
    tecnologias: ['Python', 'Automation'],
    github: 'https://github.com/elAce666',
    imagen: '🐍'
  },
]

export default function Proyectos() {
  return (
    <section className="section fade-in" style={{ minHeight: 350, padding: '48px 24px' }}>
      <h2 style={{ 
        background: 'linear-gradient(135deg, #c9a961, #f4e5c2, #c9a961)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent', 
        fontWeight: 300, 
        fontSize: '2.2rem', 
        marginBottom: 48, 
        textAlign: 'center',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        fontFamily: 'Playfair Display, serif'
      }}>
        Mis Proyectos
      </h2>
      <p style={{ textAlign: 'center', color: '#c9a961', marginBottom: 48, fontSize: '1.05rem', letterSpacing: '1px' }}>
        Proyectos desarrollados durante mi formación académica
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, maxWidth: 1200, margin: '0 auto' }}>
        {proyectos.map((p) => (
          <div key={p.titulo} className="project-item" style={{ 
            background: 'rgba(10, 10, 10, 0.95)', 
            borderRadius: 16, 
            boxShadow: '0 8px 32px rgba(201, 169, 97, 0.2)', 
            padding: 32, 
            color: '#ffffff', 
            transition: 'all 0.3s ease', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 16, 
            border: '1px solid rgba(201, 169, 97, 0.3)', 
            position: 'relative', 
            overflow: 'hidden',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: 8, filter: 'drop-shadow(0 4px 8px rgba(201, 169, 97, 0.3))' }}>
              {p.imagen}
            </div>
            <h3 style={{ 
              background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              fontWeight: 600, 
              fontSize: '1.4rem', 
              marginBottom: 8, 
              textAlign: 'center',
              fontFamily: 'Playfair Display, serif'
            }}>
              {p.titulo}
            </h3>
            <p style={{ marginBottom: 16, lineHeight: 1.7, flexGrow: 1, fontSize: '0.95rem', color: '#e8e8e8' }}>{p.descripcion}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16, justifyContent: 'center' }}>
              {p.tecnologias.map(tech => (
                <span key={tech} style={{ 
                  background: 'rgba(201, 169, 97, 0.2)', 
                  color: '#c9a961', 
                  border: '1px solid #c9a961',
                  padding: '6px 16px', 
                  borderRadius: 20, 
                  fontSize: '0.8rem', 
                  fontWeight: 600, 
                  boxShadow: '0 2px 8px rgba(201, 169, 97, 0.2)',
                  letterSpacing: '0.5px'
                }}>
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: 12, marginTop: 'auto' }}>
              {p.url && (
                <a href={p.url} target="_blank" rel="noreferrer" style={{ 
                  flex: 1, 
                  textAlign: 'center', 
                  color: '#0a0a0a', 
                  background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
                  borderRadius: 8, 
                  padding: '12px 20px', 
                  textDecoration: 'none', 
                  fontWeight: 600, 
                  boxShadow: '0 4px 15px rgba(201, 169, 97, 0.4)', 
                  transition: 'all 0.3s',
                  letterSpacing: '1px'
                }}>
                  🔗 Demo
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" style={{ 
                  flex: 1, 
                  textAlign: 'center', 
                  color: '#c9a961', 
                  background: 'transparent', 
                  border: '2px solid #c9a961', 
                  borderRadius: 8, 
                  padding: '12px 20px', 
                  textDecoration: 'none', 
                  fontWeight: 600, 
                  transition: 'all 0.3s',
                  letterSpacing: '1px'
                }}>
                  🐙 GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
