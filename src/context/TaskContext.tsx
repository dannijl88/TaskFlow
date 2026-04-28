import { createContext, useState, type ReactNode } from "react";
import type { FilterType, Task, TaskContextType } from "../types/task.types";

export const context = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    
    const [tasks, setTasks] = useState<Task[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [filter, setFilter] = useState<FilterType>("all")

    const addTask = (title: string, description?: string, completed = false) =>  {
        setIsLoading(true)
        setTimeout(() => {
            const newTask = {
                id: Date.now(),
                title: title,
                description: description,
                completed: completed
            }
            setTasks(prevTasks =>[...tasks, newTask])
            setIsLoading(false)
        }, 800);
        

        
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

    const filteredTasks = tasks.filter(task => {
        if(filter === 'all') return true
        if(filter === 'pending') return !task.completed
        if(filter === 'completed') return task.completed
    })

    return (
            <context.Provider value={{ tasks: filteredTasks, addTask, toggleTask, deleteTask, editTask, isLoading, error, filter, setFilter}}>
                {children}
            </context.Provider>)

}