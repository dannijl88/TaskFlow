import type { Task } from "../../types/task.types";

export default function TaskItem({ task }: { task: Task}){
    return (
        <div className="task-item">
            <h1 className="task-item__title">{ task.title }</h1>
            <p className="task-item__description">{ task.description }</p>
            <span className="task-item__state">{ task.completed }</span>
            <button>Completar</button>
            <button>Editar</button>
            <button>Borrar</button>
        </div>
    )
}