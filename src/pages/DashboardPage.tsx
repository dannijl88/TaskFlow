import Sidebar from "../components/layout/Sidebar";
import TaskForm from "../components/tasks/TaskForm";
import TaskList from "../components/tasks/TaskList";
import '../styles/dashboard.css'

export default function DashboardPage(){
    return(
        <section className="dashboard">
            <Sidebar />
            <main className="dashboard__main">
                <TaskForm />
                <TaskList />
            </main>
        </section>
    )
}