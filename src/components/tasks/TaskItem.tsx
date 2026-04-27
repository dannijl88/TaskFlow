import type { Task } from "../../types/task.types";
import '../../styles/tasks.css'
import { useTasks } from "../../hooks/useTasks";
import { useState } from "react";

export default function TaskItem({ task }: { task: Task}){

    const taskContext = useTasks()
    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(task.title)
    const [editDescription, setEditDescription] = useState(task.description)

    if(!taskContext) return null
    const { deleteTask, toggleTask, editTask } = taskContext

    const handleRemove = () => {
        deleteTask(task.id)
    }

    const handleToggle = () => {
        toggleTask(task.id)
    }

    const handleUpdate = () => {
        if(isEditing){
            editTask(task.id, editTitle, editDescription)
            setIsEditing(false)
        }else{
            setIsEditing(true)
        }
    }

    return (
        <div className={`task-item ${task.completed ? 'task-item--completed' : ''}`}>
            <span>{task.completed ? "Completada" : ""}</span>
            {isEditing ? <input className="task-item__update-input" type="text" onChange={(e) => setEditTitle(e.target.value)} value={editTitle}/> : <h2 className="task-item__title">{task.title}</h2>}
            {isEditing ? <textarea className="task-item__update-textarea" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}></textarea> : <p className="task-item__description">{ task.description }</p>}
            <span className="task-item__state">{ task.completed }</span>
            <button onClick={handleToggle} className="task-item__button">Completar</button>
            <button onClick={handleUpdate} className="task-item__button">{isEditing ? "Guardar" : "Editar"}</button>
            <button onClick={handleRemove} className="task-item__button">Borrar</button>
        </div>
    )
}