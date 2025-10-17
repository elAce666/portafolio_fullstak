export default function SobreMi() {
  return (
    <section className="section fade-in" style={{ minHeight: 500, padding: '48px 24px' }}>
      <h2 style={{ color: '#1677ff', fontWeight: 700, fontSize: '2rem', marginBottom: 32, textAlign: 'center' }}>
        Sobre mí
      </h2>
      <div style={{ display: 'flex', gap: 48, maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 24, boxShadow: '0 4px 24px rgba(22,119,255,0.12)', padding: 48, flexWrap: 'wrap' }}>
        {/* Perfil lateral */}
        <div style={{ flex: '0 0 250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 140, height: 140, borderRadius: '50%', background: '#1677ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: '#fff' }}>
            👤
          </div>
          <h3 style={{ color: '#133a7c', fontWeight: 700, fontSize: '1.3rem', marginBottom: 4, textAlign: 'center' }}>Gabriel Mayorga</h3>
          <p style={{ color: '#666', fontSize: '0.95rem', textAlign: 'center', marginBottom: 12 }}>Desarrollador Web | Frontend</p>
          <a href="#" style={{ color: '#1677ff', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Descargar CV</a>
          <a href="#" style={{ color: '#1677ff', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Ver LinkedIn</a>
          <div style={{ marginTop: 16, width: '100%' }}>
            <h4 style={{ color: '#133a7c', fontWeight: 700, fontSize: '1rem', marginBottom: 12 }}>🎵 Música e Intereses</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', color: '#555' }}>
              <li style={{ marginBottom: 6 }}>🎸 Música</li>
              <li style={{ marginBottom: 6 }}>🎨 Diseño</li>
              <li style={{ marginBottom: 6 }}>🏃 Running</li>
              <li style={{ marginBottom: 6 }}>🎮 Gaming</li>
              <li style={{ marginBottom: 6 }}>✈️ Viajes</li>
            </ul>
          </div>
        </div>

        {/* Contenido principal */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <p style={{ fontSize: '1rem', marginBottom: 24, color: '#333', lineHeight: 1.7 }}>
            Soy un desarrollador web con experiencia en <b>React, TypeScript y Node.js</b>. Me gusta crear interfaces modernas, accesibles y de alto rendimiento. Me apasiona el aprendizaje continuo y la mejora constante.
          </p>

          <h3 style={{ color: '#133a7c', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Experiencia:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: '#555', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: 8 }}>- Desarrollo de aplicaciones web y dashboards interactivos.</li>
            <li style={{ marginBottom: 8 }}>- Implementación de pruebas unitarias y automatizadas.</li>
            <li style={{ marginBottom: 8 }}>- Colaboración en equipos ágiles y multidisciplinarios.</li>
            <li style={{ marginBottom: 8 }}>- Optimización de rendimiento y accesibilidad.</li>
          </ul>

          <h3 style={{ color: '#133a7c', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Habilidades:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: '#555', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: 8 }}>- JavaScript, TypeScript, React, Node.js, Vite</li>
            <li style={{ marginBottom: 8 }}>- CSS3, Responsive Design, Accesibilidad</li>
            <li style={{ marginBottom: 8 }}>- Testing: Karma, Jasmine, Testing Library</li>
            <li style={{ marginBottom: 8 }}>- Git, GitHub, CI/CD</li>
          </ul>

          <h3 style={{ color: '#133a7c', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Certificaciones y formación:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: '#555', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: 8 }}>- Certificado en Desarrollo Web Moderno</li>
            <li style={{ marginBottom: 8 }}>- Cursos de React y TypeScript</li>
            <li style={{ marginBottom: 8 }}>- Formación en metodologías ágiles</li>
          </ul>

          <h3 style={{ color: '#133a7c', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Logros destacados:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: 8 }}>- Finalista en Hackathon de Innovación 2024</li>
            <li style={{ marginBottom: 8 }}>- Proyecto destacado en comunidad React España</li>
            <li style={{ marginBottom: 8 }}>- Reconocimiento por excelencia en trabajo en equipo</li>
          </ul>

          <p style={{ fontStyle: 'italic', color: '#666', marginTop: 24, fontSize: '0.95rem' }}>
            "La tecnología es el puente entre ideas y soluciones."
          </p>
        </div>
      </div>

      {/* Estadísticas */}
      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
        <div style={{ background: 'linear-gradient(120deg, #133a7c 0%, #1e4a8f 100%)', borderRadius: 20, boxShadow: '0 4px 20px rgba(19,58,124,0.3)', padding: '40px 60px', minWidth: 200, textAlign: 'center', border: '2px solid #1677ff' }}>
          <div style={{ color: '#5ba3ff', fontSize: '3rem', fontWeight: 700, marginBottom: 8 }}>1</div>
          <div style={{ color: '#fff', fontSize: '1rem', fontWeight: 500 }}>Año de experiencia</div>
        </div>
        <div style={{ background: 'linear-gradient(120deg, #133a7c 0%, #1e4a8f 100%)', borderRadius: 20, boxShadow: '0 4px 20px rgba(19,58,124,0.3)', padding: '40px 60px', minWidth: 200, textAlign: 'center', border: '2px solid #1677ff' }}>
          <div style={{ color: '#5ba3ff', fontSize: '3rem', fontWeight: 700, marginBottom: 8 }}>+10</div>
          <div style={{ color: '#fff', fontSize: '1rem', fontWeight: 500 }}>Proyectos realizados</div>
        </div>
      </div>

      {/* Tarjetas de servicios */}
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap', maxWidth: 1200, margin: '48px auto 0' }}>
        <div style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #2a4a7b 100%)', borderRadius: 20, boxShadow: '0 4px 20px rgba(19,58,124,0.3)', padding: 32, minWidth: 240, maxWidth: 280, textAlign: 'left', border: '2px solid #1677ff' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🖌️</div>
          <h4 style={{ color: '#ff1a5e', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>UI/UX Design</h4>
          <p style={{ color: '#d0dff0', fontSize: '0.95rem', lineHeight: 1.6 }}>Diseño y optimización de interfaces.</p>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #2a4a7b 100%)', borderRadius: 20, boxShadow: '0 4px 20px rgba(19,58,124,0.3)', padding: 32, minWidth: 240, maxWidth: 280, textAlign: 'left', border: '2px solid #1677ff' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>💻</div>
          <h4 style={{ color: '#ff1a5e', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Desarrollo Web</h4>
          <p style={{ color: '#d0dff0', fontSize: '0.95rem', lineHeight: 1.6 }}>Aplicaciones web modernas y responsivas.</p>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #2a4a7b 100%)', borderRadius: 20, boxShadow: '0 4px 20px rgba(19,58,124,0.3)', padding: 32, minWidth: 240, maxWidth: 280, textAlign: 'left', border: '2px solid #1677ff' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🔍</div>
          <h4 style={{ color: '#ff1a5e', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Auditoría & Debug</h4>
          <p style={{ color: '#d0dff0', fontSize: '0.95rem', lineHeight: 1.6 }}>Revisión y mejora de código y performance.</p>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #2a4a7b 100%)', borderRadius: 20, boxShadow: '0 4px 20px rgba(19,58,124,0.3)', padding: 32, minWidth: 240, maxWidth: 280, textAlign: 'left', border: '2px solid #1677ff' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>📈</div>
          <h4 style={{ color: '#ff1a5e', fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Estrategia & Consultoría</h4>
          <p style={{ color: '#d0dff0', fontSize: '0.95rem', lineHeight: 1.6 }}>Planificación y asesoría en proyectos.</p>
        </div>
      </div>
    </section>
  )
}
