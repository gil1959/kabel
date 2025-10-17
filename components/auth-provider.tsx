"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

type User = { name: string; email: string } | null

type AuthContextType = {
    user: User
    login: (email: string, password: string) => Promise<boolean>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User>(null)
    useEffect(() => {
        const raw = localStorage.getItem("kabel_auth_user")
        if (raw) {
            try {
                setUser(JSON.parse(raw))
            } catch {
                localStorage.removeItem("kabel_auth_user")
            }
        }
    }, [])

    const login = async (email: string, password: string) => {
        // email: bodro@example.com
        // password: 123456
        if (email === "bodro@example.com" && password === "123456") {
            const u = { name: "Bodro", email }
            setUser(u)
            localStorage.setItem("kabel_auth_user", JSON.stringify(u))
            return true
        }
        return false
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("kabel_auth_user")
    }

    const value = useMemo(() => ({ user, login, logout }), [user])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error("useAuth must be used within <AuthProvider>")
    return ctx
}
