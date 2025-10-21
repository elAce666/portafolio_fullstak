import Timeline from '../components/Timeline'

export default function SobreMi() {
  return (
    <section className="section fade-in" style={{ minHeight: 500, padding: '48px 24px' }}>
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
        Sobre mí
      </h2>
      <div style={{ 
        display: 'flex', 
        gap: 48, 
        maxWidth: 1100, 
        margin: '0 auto', 
        background: 'rgba(10, 10, 10, 0.95)', 
        borderRadius: 16, 
        boxShadow: '0 8px 40px rgba(201, 169, 97, 0.15)', 
        padding: 48, 
        flexWrap: 'wrap', 
        border: '1px solid rgba(201, 169, 97, 0.3)',
        backdropFilter: 'blur(20px)'
      }}>
        {/* Perfil lateral */}
        <div style={{ flex: '0 0 250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ 
            width: 180, 
            height: 180, 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, #c9a961 0%, #f4e5c2 50%, #c9a961 100%)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 8px 32px rgba(201, 169, 97, 0.5)',
            border: '4px solid #0a0a0a',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img 
              src="/yololo.png" 
              alt="Gabriel Mayorga"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </div>
          <h3 style={{ 
            color: '#ffffff', 
            fontWeight: 600, 
            fontSize: '1.3rem', 
            marginBottom: 4, 
            textAlign: 'center',
            fontFamily: 'Playfair Display, serif'
          }}>Gabriel Mayorga</h3>
          <p style={{ 
            color: '#c9a961', 
            fontSize: '0.95rem', 
            textAlign: 'center', 
            marginBottom: 12,
            letterSpacing: '1px'
          }}>Estudiante de Ingeniería | Frontend</p>
          <a href="https://github.com/elAce666" target="_blank" rel="noopener noreferrer" style={{ 
            background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
            color: '#0a0a0a', 
            padding: '10px 24px', 
            borderRadius: 8, 
            fontWeight: 600, 
            fontSize: '0.9rem', 
            textDecoration: 'none', 
            boxShadow: '0 4px 20px rgba(201, 169, 97, 0.4)', 
            transition: 'all 0.3s',
            letterSpacing: '1px'
          }}>🐙 Ver GitHub</a>
          <div style={{ marginTop: 16, width: '100%' }}>
            <h4 style={{ 
              color: '#c9a961', 
              fontWeight: 600, 
              fontSize: '1rem', 
              marginBottom: 12,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>◆ Intereses</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#e8e8e8' }}>
              <li style={{ marginBottom: 8, paddingLeft: 8, borderLeft: '2px solid #c9a961' }}>💻 Programación</li>
              <li style={{ marginBottom: 8, paddingLeft: 8, borderLeft: '2px solid #c9a961' }}>🎮 Tecnología</li>
              <li style={{ marginBottom: 8, paddingLeft: 8, borderLeft: '2px solid #c9a961' }}>📚 Aprendizaje</li>
              <li style={{ marginBottom: 8, paddingLeft: 8, borderLeft: '2px solid #c9a961' }}>🎨 Diseño Web</li>
            </ul>
          </div>
        </div>

        {/* Contenido principal */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <p style={{ fontSize: '1.05rem', marginBottom: 32, color: '#e8e8e8', lineHeight: 1.8 }}>
            Estudiante de segundo año de Ingeniería en Informática, apasionado por el <b style={{ color: '#c9a961' }}>desarrollo web frontend</b>. 
            Actualmente enfocado en aprender <b style={{ color: '#c9a961' }}>React, TypeScript y herramientas modernas</b> de desarrollo.
          </p>

          <h3 style={{ 
            color: '#c9a961', 
            fontWeight: 600, 
            fontSize: '1.2rem', 
            marginBottom: 16,
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>◆ Formación Académica</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', color: '#e8e8e8', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>📖 Estudiante de Ingeniería en Informática (2do año, 2do semestre)</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>💡 Cursos de desarrollo web y programación</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>🏆 Participación en proyectos académicos</li>
          </ul>

          <h3 style={{ 
            background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            fontWeight: 600, 
            fontSize: '1.2rem', 
            marginBottom: 16,
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>◆ Habilidades Técnicas</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: '#e8e8e8', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>⚛️ React, TypeScript, JavaScript</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>☕ Java - Programación orientada a objetos</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>🐍 Python - Automatización y scripts</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>🗄️ SQL, MySQL, PostgreSQL</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>🎨 HTML5, CSS3, Responsive Design</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>⚡ Vite, Git, GitHub</li>
          </ul>

          <h3 style={{ 
            color: '#c9a961', 
            fontWeight: 600, 
            fontSize: '1.2rem', 
            marginBottom: 16,
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>◆ Objetivos</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e8e8e8', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>🚀 Continuar aprendiendo tecnologías modernas</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>💼 Desarrollar proyectos cada vez más complejos</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>🤝 Contribuir a proyectos open source</li>
            <li style={{ marginBottom: 10, paddingLeft: 12, borderLeft: '3px solid #c9a961' }}>📈 Obtener experiencia práctica en desarrollo</li>
          </ul>
        </div>
      </div>

      {/* Estadísticas */}
      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
        <div style={{ 
          background: 'rgba(10, 10, 10, 0.95)', 
          borderRadius: 12, 
          boxShadow: '0 4px 20px rgba(201, 169, 97, 0.2)', 
          padding: '32px 48px', 
          minWidth: 180, 
          textAlign: 'center', 
          border: '1px solid rgba(201, 169, 97, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ color: '#c9a961', fontSize: '2.5rem', fontWeight: 700, marginBottom: 8 }}>2º</div>
          <div style={{ color: '#e8e8e8', fontSize: '0.95rem', fontWeight: 500 }}>Año Universidad</div>
        </div>
        <div style={{ 
          background: 'rgba(10, 10, 10, 0.95)', 
          borderRadius: 12, 
          boxShadow: '0 4px 20px rgba(201, 169, 97, 0.2)', 
          padding: '32px 48px', 
          minWidth: 180, 
          textAlign: 'center', 
          border: '1px solid rgba(201, 169, 97, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ color: '#c9a961', fontSize: '2.5rem', fontWeight: 700, marginBottom: 8 }}>4+</div>
          <div style={{ color: '#e8e8e8', fontSize: '0.95rem', fontWeight: 500 }}>Proyectos Realizados</div>
        </div>
      </div>

      {/* Tarjetas de servicios */}
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap', maxWidth: 1200, margin: '48px auto 0' }}>
        <div style={{ 
          background: 'rgba(10, 10, 10, 0.95)', 
          borderRadius: 12, 
          boxShadow: '0 4px 20px rgba(201, 169, 97, 0.15)', 
          padding: 28, 
          minWidth: 220, 
          maxWidth: 260, 
          textAlign: 'left', 
          border: '1px solid rgba(201, 169, 97, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🎨</div>
          <h4 style={{ color: '#c9a961', fontWeight: 600, fontSize: '1.1rem', marginBottom: 12, fontFamily: 'Playfair Display, serif' }}>Diseño Web</h4>
          <p style={{ color: '#e8e8e8', fontSize: '0.9rem', lineHeight: 1.6 }}>Interfaces modernas y responsive.</p>
        </div>
        <div style={{ 
          background: 'rgba(10, 10, 10, 0.95)', 
          borderRadius: 12, 
          boxShadow: '0 4px 20px rgba(201, 169, 97, 0.15)', 
          padding: 28, 
          minWidth: 220, 
          maxWidth: 260, 
          textAlign: 'left', 
          border: '1px solid rgba(201, 169, 97, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>⚛️</div>
          <h4 style={{ color: '#c9a961', fontWeight: 600, fontSize: '1.1rem', marginBottom: 12, fontFamily: 'Playfair Display, serif' }}>React Development</h4>
          <p style={{ color: '#e8e8e8', fontSize: '0.9rem', lineHeight: 1.6 }}>Aplicaciones con React y TypeScript.</p>
        </div>
        <div style={{ 
          background: 'rgba(10, 10, 10, 0.95)', 
          borderRadius: 12, 
          boxShadow: '0 4px 20px rgba(201, 169, 97, 0.15)', 
          padding: 28, 
          minWidth: 220, 
          maxWidth: 260, 
          textAlign: 'left', 
          border: '1px solid rgba(201, 169, 97, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>📱</div>
          <h4 style={{ color: '#c9a961', fontWeight: 600, fontSize: '1.1rem', marginBottom: 12, fontFamily: 'Playfair Display, serif' }}>Responsive Design</h4>
          <p style={{ color: '#e8e8e8', fontSize: '0.9rem', lineHeight: 1.6 }}>Diseños adaptativos para todos los dispositivos.</p>
        </div>
      </div>

      {/* Timeline de experiencia */}
      <Timeline />
    </section>
  )
}
