import { createContext, useState, type ReactNode } from "react";
import type { Task, TaskContextType } from "../types/task.types";

export const context = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = (title: string, description?: string, completed = false) =>  {
        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            completed: completed
        }

        setTasks([...tasks, newTask])
    }

    const toggleTask = (id: number) => {
        const modifiedTask = tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task )
        setTasks(modifiedTask)
    }

    const deleteTask = (id: number) => {
        const filteredTasks = tasks.filter((task) => task.id !== id)
        setTasks(filteredTasks)
    }

    const editTask = (id: number, title: string, description?: string) => {
        const modifiedTask = tasks.map((task) => task.id === id ? {...task, title: title, description: description} : task) 

        setTasks(modifiedTask)
    }

    return (
            <context.Provider value={{ tasks: tasks, addTask, toggleTask, deleteTask, editTask}}>
                {children}
            </context.Provider>)

}