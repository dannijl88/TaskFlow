import { useState } from "react"
import { useTasks } from "../../hooks/useTasks"

export default function TaskForm(){

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const task = useTasks()

    if(!task) return null
    const { addTask } = task

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault()
        addTask(title, description)
        setTitle("")
        setDescription("")
    }

    return (
        <div className="task-form-page">
            <form onSubmit={handleSubmit} className="task-form">
                <h1 className="task-form__title">Añade una tarea</h1>
                <label htmlFor="title" className="task-form__label">Título</label>
                <input type="text" value={title} className="task-form__input" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="description" className="task-form__label">Descripción</label>
                <textarea className="task-form__textarea" value={description} name="description" id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                <button className="task-form__button">Registrar tarea</button>
            </form>
        </div>
    )
}