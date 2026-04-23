import { createContext, useState, type ReactNode } from "react";
import type { AuthContextType, User } from "../types/auth.types";

export const context = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [actualUser, setActualUser] = useState<User | null>(null)
    
    const login = (username: string, password: string) => {
        if(username === "admin" && password === "1234"){
            const user = {
                id: 1,
                username: "admin",
                password: "1234"
            }
            setActualUser(user)
            return true;
        }else{
            return false;
        }
    }

    const logout = () => {
        setActualUser(null)
    }
    return (
        <context.Provider value={{ user: actualUser, login, logout}}>
            {children}
        </context.Provider>)
}