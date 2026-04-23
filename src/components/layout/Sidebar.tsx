import { useAuth } from "../../hooks/useAuth"
import '../../styles/sidebar.css'


export default function Sidebar(){

    const auth = useAuth()

    if(!auth) return null
    const { user, logout } = auth
    


    return (
        <aside className="sidebar">
            <h1 className="sidebar__title">TaskFlow</h1>
            <div className="sidebar__user-container">
                Bienvenido {user?.username}
                <button className="sidebar__logout-button" onClick={logout}>Cerrar sesión</button>
            </div>
        </aside>
    )
}