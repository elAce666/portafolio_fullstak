type Hito = { año: string; descripcion: string }

const hitos: Hito[] = [
  { año: '2019', descripcion: 'Comencé la carrera de Ingeniería en Informática.' },
  { año: '2021', descripcion: 'Primer proyecto freelance en desarrollo web.' },
  { año: '2023', descripcion: 'Práctica profesional en empresa de software.' },
  { año: '2024', descripcion: 'Graduación y primer empleo como Fullstack.' },
  { año: '2025', descripcion: 'Portafolio profesional y nuevos retos.' },
]

export default function Timeline() {
  return (
    <div className="timeline fade-in">
      <h3>Línea de vida</h3>
      <ul>
        {hitos.map((hito, i) => (
          <li key={i} className="timeline-item">
            <span className="timeline-year">{hito.año}</span>
            <span className="timeline-desc">{hito.descripcion}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
