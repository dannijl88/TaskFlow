import { useTasks } from "../../hooks/useTasks"
import TaskItem from "./TaskItem"
import '../../styles/tasks.css'

export default function TaskList(){

    const taskContext = useTasks()

    if(!taskContext) return null
    const { tasks, isLoading } = taskContext

    return (
        <div className="task-grid">
            { isLoading ? "Cargando..." : tasks.map((task) => <TaskItem key={task.id} task={task}/>)}
            {tasks.length === 0 && !isLoading ? <p>No hay tareas pendientes, ¡Añade una!</p> : ""}
        </div>
    )
}