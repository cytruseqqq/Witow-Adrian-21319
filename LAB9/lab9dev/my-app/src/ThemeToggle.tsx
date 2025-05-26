// ThemeToggle.tsx
import React from "react"
import { useTheme } from "./ThemeContext.tsx"

export default function ThemeToggle() {
    const { dark, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>
            {dark ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
        </button>
    )
}
