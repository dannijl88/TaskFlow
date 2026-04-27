import type { Task } from "../../types/task.types";
import '../../styles/tasks.css'
import { useTasks } from "../../hooks/useTasks";

export default function TaskItem({ task }: { task: Task}){

    const taskContext = useTasks()

    if(!taskContext) return null
    const { deleteTask, toggleTask } = taskContext

    const handleRemove = () => {
        deleteTask(task.id)
    }

    const handleToggle = () => {
        toggleTask(task.id)
    }

    return (
        <div className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
            <span>{task.completed ? "Completada" : ""}</span>
            <h2 className="task-item__title">{ task.title }</h2>
            <p className="task-item__description">{ task.description }</p>
            <span className="task-item__state">{ task.completed }</span>
            <button onClick={handleToggle} className="task-item__button">Completar</button>
            <button className="task-item__button">Editar</button>
            <button onClick={handleRemove} className="task-item__button">Borrar</button>
        </div>
    )
}