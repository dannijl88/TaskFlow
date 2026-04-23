import { useContext } from "react"
import { context } from "../context/TaskContext"

export const useTasks = () => {
    const task = useContext(context)
    return task
}