import { render, screen, fireEvent } from '@testing-library/react'
import Contacto from './Contacto'

describe('Contacto', () => {
  it('envía el formulario y muestra confirmación', () => {
    render(<Contacto />)
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Ana' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ana@example.com' } })
    fireEvent.change(screen.getByLabelText('Mensaje'), { target: { value: 'Hola' } })
    const form = screen.getByLabelText('form-contacto')
    fireEvent.submit(form)
    expect(screen.getByRole('status').textContent).toContain('¡Mensaje enviado!')
  })
})
