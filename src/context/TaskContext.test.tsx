import { render, screen, waitFor } from "@testing-library/react"
import { useTasks } from "../hooks/useTasks"
import { TaskProvider } from "./TaskContext"
import userEvent from "@testing-library/user-event"

const TestComponent = () => {
    const taskContext = useTasks()
    if(!taskContext) return null
    const { tasks, addTask, deleteTask, toggleTask } = taskContext
    
    return (
        <div>
            <span>Total: {tasks.length}</span>
            {tasks.length > 0 && <span>Completed: {String(tasks[0].completed)}</span>}
            <button onClick={() => addTask('Tarea de prueba')}>Añadir</button>
            <button onClick={() => deleteTask(tasks[0].id)}>Borrar</button>
            <button onClick={() => toggleTask(tasks[0].id)}>Completada</button>
        </div>
    )
}

test('debe añadir una tarea al hacer click en el botón añadir', async () => {
    render(
        <TaskProvider>
            <TestComponent />
        </TaskProvider>
    )

    const texto = screen.getByText((_, element) => element?.textContent === 'Total: 0')
    expect(texto).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', {name: /Añadir/i}))
    await waitFor(() => {
        expect(screen.getByText((_, element) => element?.textContent === 'Total: 1')).toBeInTheDocument()
    })
})

test('debe borrar la tarea al hacer click en el boton borrar', async () => {
    render(
        <TaskProvider>
            <TestComponent />
        </TaskProvider>
    )

    const texto = screen.getByText((_, element) => element?.textContent === 'Total: 0')
    expect(texto).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', {name: /Añadir/i}))
    await waitFor(() => {
        expect(screen.getByText((_, element) => element?.textContent === 'Total: 1')).toBeInTheDocument()
    })
    await userEvent.click(screen.getByRole('button', {name: /Borrar/i}))
    await waitFor(() => {
        expect(screen.getByText((_, element) => element?.textContent === 'Total: 0')).toBeInTheDocument()
    })
})

test('debe cambiar el estado completado al hacer click en el boton toggle', async() => {

    render(
        <TaskProvider>
            <TestComponent />
        </TaskProvider>
    )

    const texto = screen.getByText((_, element) => element?.textContent === 'Total: 0')
    expect(texto).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', {name: /Añadir/i}))
    await waitFor(() => {
        expect(screen.getByText((_, element) => element?.textContent === 'Total: 1')).toBeInTheDocument()
    })
    expect(screen.getByText((_, element) => element?.textContent === 'Completed: false')).toBeInTheDocument()
    
    await userEvent.click(screen.getByRole('button', {name: /Completada/i}))
    await waitFor(() => {
        expect(screen.getByText((_, element) => element?.textContent === 'Completed: true')).toBeInTheDocument()
    })
    await userEvent.click(screen.getByRole('button', {name: /Completada/i}))
    await waitFor(() => {
        expect(screen.getByText((_, element) => element?.textContent === 'Completed: false')).toBeInTheDocument()
    })


})