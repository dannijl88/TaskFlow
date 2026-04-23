import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import '../styles/login.css'

export default function LoginPage(){

    const auth = useAuth()
    const [ username, setUsername] = useState<string>("")
    const [ password, setPassword] = useState<string>("")

    if(!auth) return null
    const { login } = auth

    const handleSubmit = () => {
        login(username, password)
    }

    return(
        <main className="login-page">
            <form className="login-form">
                <h1 className="login-form__title">Inicia sesión</h1>
                <label htmlFor="username" className="login-form__label">Usuario</label>
                <input type="text" className="login-form__input" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password" className="login-form__label">Contraseña</label>
                <input type="password" className="login-form__input" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                <button className="login-form__button" onClick={handleSubmit}>Entrar</button>
            </form>
        </main>
    )
}