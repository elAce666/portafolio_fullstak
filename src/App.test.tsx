import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('muestra Inicio por defecto y navega a Contacto', () => {
    render(<App />)
    // Verifica el encabezado de la sección Inicio
    expect(screen.getByRole('heading', { name: 'Inicio' })).toBeTruthy()
    // Navegar a Contacto usando el botón del navbar
    fireEvent.click(screen.getByRole('button', { name: 'Contacto' }))
    // Verifica el encabezado de la sección Contacto
    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeTruthy()
  })
})
