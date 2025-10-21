type Hito = { 
  año: string
  titulo: string
  descripcion: string
  tipo: 'educacion' | 'proyecto' | 'logro'
}

const hitos: Hito[] = [
  { 
    año: '2024', 
    titulo: 'Inicio Universidad',
    descripcion: 'Comencé mis estudios en Ingeniería en Informática.',
    tipo: 'educacion'
  },
  { 
    año: '2024', 
    titulo: 'Primeros Proyectos Web',
    descripcion: 'Desarrollo de páginas web estáticas con HTML, CSS y JavaScript.',
    tipo: 'proyecto'
  },
  { 
    año: '2025', 
    titulo: 'Aprendiendo React',
    descripcion: 'Inicio de aprendizaje en React y TypeScript para proyectos más complejos.',
    tipo: 'educacion'
  },
  { 
    año: '2025', 
    titulo: 'Portafolio Personal',
    descripcion: 'Creación de mi primer portafolio profesional con React y TypeScript.',
    tipo: 'logro'
  },
]

const getIcon = (tipo: Hito['tipo']) => {
  switch(tipo) {
    case 'educacion': return '🎓'
    case 'proyecto': return '💻'
    case 'logro': return '🏆'
  }
}

const getColor = (tipo: Hito['tipo']) => {
  switch(tipo) {
    case 'educacion': return '#c9a961'
    case 'proyecto': return '#d4b896'
    case 'logro': return '#f4e5c2'
  }
}

export default function Timeline() {
  return (
    <div className="timeline fade-in" style={{ margin: '48px 0', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
      <h3 style={{ 
        color: '#c9a961', 
        fontWeight: 700, 
        fontSize: '1.5rem', 
        marginBottom: 32, 
        textAlign: 'center',
        fontFamily: 'Playfair Display, serif',
        textTransform: 'uppercase',
        letterSpacing: '3px'
      }}>
        ◆ Mi Trayectoria ◆
      </h3>
      <div style={{ position: 'relative', paddingLeft: 40 }}>
        {/* Línea vertical */}
        <div style={{ 
          position: 'absolute', 
          left: 15, 
          top: 0, 
          bottom: 0, 
          width: 3, 
          background: 'linear-gradient(180deg, #c9a961 0%, #d4b896 50%, #f4e5c2 100%)' 
        }} />
        
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {hitos.map((hito, i) => (
            <li key={i} style={{ position: 'relative', marginBottom: 32, paddingLeft: 24 }}>
              {/* Punto en la línea */}
              <div style={{ 
                position: 'absolute', 
                left: 0, 
                top: 8,
                width: 32, 
                height: 32, 
                borderRadius: '50%', 
                background: '#0a0a0a', 
                border: `3px solid ${getColor(hito.tipo)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                boxShadow: `0 0 12px ${getColor(hito.tipo)}80`
              }}>
                {getIcon(hito.tipo)}
              </div>
              
              {/* Contenido */}
              <div style={{ 
                background: 'rgba(10, 10, 10, 0.95)', 
                borderRadius: 10, 
                padding: 20, 
                boxShadow: '0 2px 12px rgba(201, 169, 97, 0.2)',
                border: `1px solid ${getColor(hito.tipo)}60`,
                transition: 'transform 0.2s, box-shadow 0.2s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(8px)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(201, 169, 97, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(201, 169, 97, 0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                  <span style={{ 
                    background: getColor(hito.tipo), 
                    color: '#0a0a0a', 
                    padding: '4px 12px', 
                    borderRadius: 6, 
                    fontSize: '0.8rem', 
                    fontWeight: 700 
                  }}>
                    {hito.año}
                  </span>
                  <h4 style={{ 
                    color: '#ffffff', 
                    fontSize: '1.1rem', 
                    fontWeight: 700, 
                    margin: 0,
                    fontFamily: 'Playfair Display, serif'
                  }}>
                    {hito.titulo}
                  </h4>
                </div>
                <p style={{ color: '#e8e8e8', margin: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {hito.descripcion}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
