export interface Task {
    id: number
    title: string
    description?: string
    completed: boolean
}

export interface TaskContextType {
    tasks: Task[]
    addTask(title: string, description?: string): void
    toggleTask(id: number): void
    deleteTask(id: number): void
    editTask(id: number, title: string, description?: string): void
}