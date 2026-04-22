import { Route, Routes } from "react-router-dom"
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  

  return (
    <Routes>
      <Route path="/" element={<DashboardPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/*" element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App
