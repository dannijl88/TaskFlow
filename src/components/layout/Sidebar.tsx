import { useAuth } from "../../hooks/useAuth"
import { useTasks } from "../../hooks/useTasks"
import '../../styles/sidebar.css'


export default function Sidebar(){

    const auth = useAuth()
    const tasks = useTasks()

    if(!auth) return null
    if(!tasks) return null

    const { filter,setFilter } = tasks
    const { user, logout } = auth
    


    return (
        <aside className="sidebar">
            <h1 className="sidebar__title">TaskFlow</h1>
            <div className="sidebar__user-container">
                Bienvenido {user?.username}
                <button className="sidebar__logout-button" onClick={logout}>Cerrar sesión</button>
            </div>
            <div className="sidebar__filter-container">
                <button onClick={() => setFilter('all')} className={`sidebar__filter-button ${filter === 'all' ? 'sidebar__filter-button--active' : ''}`}>Todas</button>
                <button onClick={() => setFilter("pending")} className={`sidebar__filter-button ${filter === 'pending' ? 'sidebar__filter-button--active' : ''}`}>Pendientes</button>
                <button onClick={() => setFilter("completed")} className={`sidebar__filter-button ${filter === 'completed' ? 'sidebar__filter-button--active' : ''}`}>Completadas</button>
            </div>
        </aside>
    )
}