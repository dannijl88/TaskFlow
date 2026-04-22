export interface User {
    id: number
    username: string
    password: string
}

export interface AuthContextType{
    user: User | null
    login(username: string, password: string): void
    logout(): void
}