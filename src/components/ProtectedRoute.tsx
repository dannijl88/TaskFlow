import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {

    const auth = useAuth()

    if(!auth) return null
    const { user } = auth

    if(user){
        return children
    }else{
        return <Navigate to="/login"/>
    }
}