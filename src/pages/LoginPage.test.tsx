import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from './LoginPage'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'

test('debe renderizar el formulario con los campos de usuario, contraseña y botón de entrar', () => {
    render(
        <BrowserRouter>
            <AuthProvider>
                <LoginPage/>
            </AuthProvider>
        </BrowserRouter>
    )

    const usernameInput = screen.getByLabelText(/usuario/i)
    expect(usernameInput).toBeInTheDocument()

    const passwordInput = screen.getByLabelText(/contraseña/i)
    expect(passwordInput).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /entrar/i })
    expect(button).toBeInTheDocument()
})

test('debe mostrar error con credenciales incorrectas', async () => {
    render(
        <BrowserRouter>
            <AuthProvider>
                <LoginPage/>
            </AuthProvider>
        </BrowserRouter>
    )

    await userEvent.type(screen.getByLabelText(/usuario/i), 'usuarioMalo')
    await userEvent.type(screen.getByLabelText(/contraseña/i), 'passwordMala')
    await userEvent.click(screen.getByRole('button', { name: /entrar/i }))
})

