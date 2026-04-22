import { useContext } from "react"
import { context } from "../context/AuthContext"

export const useAuth = () => {
    const auth = useContext(context)
    return auth
}