// ThemeContext.tsx
import { createContext, useContext, useState, ReactNode } from "react"

interface ThemeContextType {
    dark: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [dark, setDark] = useState(false)
    const toggleTheme = () => setDark((prev) => !prev)

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within a ThemeProvider")
    return context
}
