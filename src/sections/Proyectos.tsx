type Proyecto = { titulo: string; descripcion: string; url?: string }

const proyectos: Proyecto[] = [
  { titulo: 'Proyecto 1', descripcion: 'Descripción breve del proyecto 1', url: '#' },
  { titulo: 'Proyecto 2', descripcion: 'Descripción breve del proyecto 2', url: '#' },
]

export default function Proyectos() {
  return (
    <section className="section fade-in" style={{ minHeight: 350 }}>
      <h2 style={{ color: '#1677ff', fontWeight: 700, fontSize: '2rem', marginBottom: 18 }}>
        <span role="img" aria-label="Proyectos">🗂️</span> Proyectos
      </h2>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {proyectos.map((p) => (
          <div key={p.titulo} className="project-item" style={{ background: 'linear-gradient(120deg, #133a7c 0%, #232a3d 100%)', borderRadius: 20, boxShadow: '0 2px 16px rgba(22,119,255,0.10)', padding: 28, minWidth: 220, maxWidth: 320, color: '#eaf2fb', transition: 'transform 0.2s, box-shadow 0.2s' }}>
            <h3 style={{ color: '#90b4ff', fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>
              <span role="img" aria-label="Idea">💡</span> {p.titulo}
            </h3>
            <p style={{ marginBottom: 12 }}>{p.descripcion}</p>
            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer" style={{ color: '#fff', background: '#1677ff', borderRadius: 8, padding: '8px 18px', textDecoration: 'none', fontWeight: 500, boxShadow: '0 2px 8px rgba(22,119,255,0.14)', transition: 'background 0.2s, color 0.2s' }}>
                Ver más
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
