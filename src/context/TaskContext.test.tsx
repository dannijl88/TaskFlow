import { render, screen, waitFor } from "@testing-library/react"
import { useTasks } from "../hooks/useTasks"
import { TaskProvider } from "./TaskContext"
import userEvent from "@testing-library/user-event"

const TestComponent = () => {
    const taskContext = useTasks()
    if(!taskContext) return null
    const { tasks, addTask } = taskContext
    
    return (
        <div>
            <span>Total: {tasks.length}</span>
            <button onClick={() => addTask('Tarea de prueba')}>Añadir</button>
        </div>
    )
}

test('debe añadir una tarea al hacer click en el botón añadir', async () => {
    render(
        <TaskProvider>
            <TestComponent />
        </TaskProvider>
    )

    const texto = screen.getByText((content, element) => element?.textContent === 'Total: 0')
    expect(texto).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', {name: /Añadir/i}))
    await waitFor(() => {
    expect(screen.getByText((content, element) => element?.textContent === 'Total: 1')).toBeInTheDocument()
})
})