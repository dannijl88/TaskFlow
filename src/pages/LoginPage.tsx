import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import '../styles/login.css'
import { useNavigate } from "react-router-dom"

export default function LoginPage(){

    const auth = useAuth()
    const navigate = useNavigate()
    const [ username, setUsername] = useState<string>("")
    const [ password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")

    if(!auth) return null
    const { login } = auth

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
        const resultado = login(username, password)
        if(resultado){
            navigate("/")
        }else{
            setError("Usuario  o contraseña incorrectos")
        }
    }

    return(
        <main className="login-page">
            <form onSubmit={handleSubmit} className="login-form">
                <h1 className="login-form__title">Inicia sesión</h1>
                <label htmlFor="username" className="login-form__label">Usuario</label>
                <input type="text" className="login-form__input" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password" className="login-form__label">Contraseña</label>
                <input type="password" className="login-form__input" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                <span className="login-form__error">{error}</span>
                <button className="login-form__button">Entrar</button>
            </form>
        </main>
    )
}