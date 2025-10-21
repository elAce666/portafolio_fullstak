import { useState } from 'react'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [errores, setErrores] = useState<{nombre?: string, email?: string, mensaje?: string}>({})

  const validarFormulario = () => {
    const nuevosErrores: {nombre?: string, email?: string, mensaje?: string} = {}
    
    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido'
    }
    
    // Validación mejorada de email: debe contener @ y terminar en .com o .cl
    if (!email.trim()) {
      nuevosErrores.email = 'El email es requerido'
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.(com|cl)$/i
      if (!emailPattern.test(email)) {
        nuevosErrores.email = 'Por favor, ingresa un correo válido que termine en .com o .cl'
      }
    }
    
    if (!mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es requerido'
    } else if (mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    }
    
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validarFormulario()) {
      setEnviado(true)
      console.log({ nombre, email, mensaje })
    }
  }

  const resetFormulario = () => {
    setNombre('')
    setEmail('')
    setMensaje('')
    setErrores({})
    setEnviado(false)
  }

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
        Contacto
      </h2>
      <p style={{ textAlign: 'center', color: '#c9a961', marginBottom: 48, fontSize: '1.05rem', letterSpacing: '1px' }}>
        ¿Tienes alguna pregunta o propuesta? ¡Escríbeme!
      </p>
      
      <div style={{ display: 'flex', gap: 48, maxWidth: 1000, margin: '0 auto', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Información de contacto */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ 
            background: 'rgba(10, 10, 10, 0.95)', 
            borderRadius: 12, 
            padding: 24, 
            color: '#ffffff', 
            border: '1px solid rgba(201, 169, 97, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(201, 169, 97, 0.15)'
          }}>
            <h3 style={{ 
              fontSize: '1.3rem', 
              marginBottom: 16, 
              background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600
            }}>◆ Información</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#c9a961' }}>Email</div>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>tu_email@example.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '1.5rem' }}>🐙</span>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#c9a961' }}>GitHub</div>
                  <a href="https://github.com/elAce666" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: '#c9a961', textDecoration: 'none' }}>elAce666</a>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: 'rgba(10, 10, 10, 0.95)', 
            borderRadius: 12, 
            padding: 24, 
            color: '#ffffff', 
            border: '1px solid rgba(201, 169, 97, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(201, 169, 97, 0.15)'
          }}>
            <h3 style={{ 
              fontSize: '1.3rem', 
              marginBottom: 16, 
              background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600
            }}>◆ Redes Sociales</h3>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://github.com/elAce666" target="_blank" rel="noopener noreferrer" style={{ 
                background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
                color: '#0a0a0a', 
                padding: '10px 20px', 
                borderRadius: 8, 
                textDecoration: 'none', 
                fontWeight: 600, 
                fontSize: '0.9rem', 
                transition: 'all 0.3s', 
                boxShadow: '0 4px 15px rgba(201, 169, 97, 0.4)',
                letterSpacing: '1px'
              }}>
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        {enviado ? (
          <div style={{ 
            flex: '1 1 400px', 
            background: 'rgba(10, 10, 10, 0.95)', 
            borderRadius: 12, 
            boxShadow: '0 4px 20px rgba(201, 169, 97, 0.15)', 
            padding: 48, 
            color: '#ffffff', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 24, 
            border: '2px solid #c9a961',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
            alignItems: 'center'
          }}>
            <div style={{ 
              fontSize: '4rem', 
              animation: 'fadeIn 0.5s ease',
              marginBottom: 16
            }}>
              ✅
            </div>
            <h3 style={{ 
              color: '#c9a961', 
              fontSize: '1.5rem',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              marginBottom: 8
            }}>
              ¡Gracias por tu mensaje, {nombre || 'amig@'}!
            </h3>
            <p style={{ 
              color: '#e8e8e8', 
              fontSize: '1.05rem',
              lineHeight: 1.6,
              maxWidth: 400
            }}>
              Me emociona la idea de una posible colaboración. Te responderé a la brevedad a <strong style={{ color: '#c9a961' }}>{email}</strong>.
            </p>
            <button 
              onClick={resetFormulario}
              style={{ 
                background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
                color: '#0a0a0a', 
                borderRadius: 8, 
                padding: '14px 32px', 
                fontWeight: 600, 
                fontSize: '1rem', 
                border: 'none', 
                boxShadow: '0 4px 15px rgba(201, 169, 97, 0.4)', 
                cursor: 'pointer', 
                marginTop: 16, 
                transition: 'all 0.3s',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(201, 169, 97, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(201, 169, 97, 0.4)'
              }}
            >
              ◆ Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit} aria-label="form-contacto" style={{ 
          flex: '1 1 400px', 
          background: 'rgba(10, 10, 10, 0.95)', 
          borderRadius: 12, 
          boxShadow: '0 4px 20px rgba(201, 169, 97, 0.15)', 
          padding: 32, 
          color: '#ffffff', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 20, 
          border: '1px solid rgba(201, 169, 97, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ color: '#c9a961' }}><span role="img" aria-label="Nombre">👤</span> Nombre *</span>
            <input 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              style={{ 
                borderRadius: 6, 
                border: errores.nombre ? '2px solid #ef4444' : '1px solid rgba(201, 169, 97, 0.3)', 
                padding: '10px 14px', 
                fontSize: '1rem', 
                width: '100%',
                outline: 'none',
                transition: 'border 0.2s',
                background: 'rgba(26, 26, 26, 0.8)',
                color: '#ffffff'
              }} 
              placeholder="Tu nombre completo"
            />
            {errores.nombre && <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>⚠️ {errores.nombre}</span>}
          </label>
          
          <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ color: '#c9a961' }}><span role="img" aria-label="Email">✉️</span> Email *</span>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ 
                borderRadius: 6, 
                border: errores.email ? '2px solid #ef4444' : '1px solid rgba(201, 169, 97, 0.3)', 
                padding: '10px 14px', 
                fontSize: '1rem', 
                width: '100%',
                outline: 'none',
                transition: 'border 0.2s',
                background: 'rgba(26, 26, 26, 0.8)',
                color: '#ffffff'
              }} 
              placeholder="tu@email.com"
            />
            {errores.email && <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>⚠️ {errores.email}</span>}
          </label>
          
          <label style={{ fontWeight: 500, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ color: '#c9a961' }}><span role="img" aria-label="Mensaje">📝</span> Mensaje *</span>
            <textarea 
              value={mensaje} 
              onChange={(e) => setMensaje(e.target.value)} 
              style={{ 
                borderRadius: 6, 
                border: errores.mensaje ? '2px solid #ef4444' : '1px solid rgba(201, 169, 97, 0.3)', 
                padding: '10px 14px', 
                fontSize: '1rem', 
                width: '100%', 
                minHeight: 120,
                outline: 'none',
                resize: 'vertical',
                transition: 'border 0.2s',
                background: 'rgba(26, 26, 26, 0.8)',
                color: '#ffffff'
              }} 
              placeholder="Escribe tu mensaje..."
            />
            {errores.mensaje && <span style={{ color: '#ef4444', fontSize: '0.85rem' }}>⚠️ {errores.mensaje}</span>}
          </label>
          
          <button 
            type="submit" 
            style={{ 
              background: 'linear-gradient(135deg, #c9a961, #f4e5c2)', 
              color: '#0a0a0a', 
              borderRadius: 8, 
              padding: '14px 0', 
              fontWeight: 600, 
              fontSize: '1.05rem', 
              border: 'none', 
              boxShadow: '0 4px 15px rgba(201, 169, 97, 0.4)', 
              cursor: 'pointer', 
              marginTop: 8, 
              transition: 'all 0.3s',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(201, 169, 97, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(201, 169, 97, 0.4)'
            }}
          >
            <span role="img" aria-label="Enviar">📤</span> Enviar Mensaje
          </button>
        </form>
        )}
      </div>
    </section>
  )
}
