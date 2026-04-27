import { useTasks } from "../../hooks/useTasks"
import TaskItem from "./TaskItem"

export default function TaskList(){

    const taskContext = useTasks()

    if(!taskContext) return null
    const { tasks } = taskContext

    return (
        <div className="task-grid">
            { tasks.map((task) => <TaskItem key={task.id} task={task}/>)}
        </div>
    )
}