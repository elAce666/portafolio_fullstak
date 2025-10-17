import { useState } from 'react'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 2000)
  }

  return (
    <section className="section fade-in" style={{ minHeight: 350 }}>
      <h2 style={{ color: '#1677ff', fontWeight: 700, fontSize: '2rem', marginBottom: 18 }}>
        <span role="img" aria-label="Contacto">📬</span> Contacto
      </h2>
      <form className="contact-form" onSubmit={onSubmit} aria-label="form-contacto" style={{ background: 'linear-gradient(120deg, #133a7c 0%, #232a3d 100%)', borderRadius: 24, boxShadow: '0 2px 16px rgba(22,119,255,0.10)', padding: 32, color: '#eaf2fb', maxWidth: 420, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <label style={{ fontWeight: 500 }}>
          <span role="img" aria-label="Nombre">👤</span> Nombre
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ borderRadius: 8, border: '1px solid #1677ff', padding: '8px 12px', marginTop: 6, fontSize: '1rem', width: '100%' }} />
        </label>
        <label style={{ fontWeight: 500 }}>
          <span role="img" aria-label="Email">✉️</span> Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ borderRadius: 8, border: '1px solid #1677ff', padding: '8px 12px', marginTop: 6, fontSize: '1rem', width: '100%' }} />
        </label>
        <label style={{ fontWeight: 500 }}>
          <span role="img" aria-label="Mensaje">📝</span> Mensaje
          <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} required style={{ borderRadius: 8, border: '1px solid #1677ff', padding: '8px 12px', marginTop: 6, fontSize: '1rem', width: '100%', minHeight: 80 }} />
        </label>
        <button type="submit" style={{ background: '#1677ff', color: '#fff', borderRadius: 8, padding: '10px 0', fontWeight: 600, fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px rgba(22,119,255,0.14)', cursor: 'pointer', marginTop: 8, transition: 'background 0.2s, color 0.2s' }}>
          <span role="img" aria-label="Enviar">📤</span> Enviar
        </button>
        {enviado && <p role="status" style={{ color: '#90b4ff', fontWeight: 600, marginTop: 8 }}>¡Mensaje enviado!</p>}
      </form>
    </section>
  )
}
