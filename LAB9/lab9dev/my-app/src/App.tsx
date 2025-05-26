// App.tsx
import React from "react"
import './App.css'

import Click from "./Click"
import Pierwsze from "./Pierwsze"
import Formularz from "./Formularz"
import { ThemeProvider } from "./ThemeContext.tsx";
import ThemeToggle from "./ThemeToggle.tsx";
import Layout from "./Layout.tsx"


function App() {
    return (
        <ThemeProvider>
            <div style={{padding: "2rem"}}>
                <h1>Test licznika kliknięć</h1>
                <Click/>

                <h1>Zlicz liczby pierwsze</h1>
                <Pierwsze/>

                <h1>Wypełnij formularz</h1>
                <Formularz/>

                <h1>Zmiana motywu</h1>
                <ThemeToggle/>

                <h1>Pomiar wysokosci</h1>
                <Layout/>
            </div>
        </ThemeProvider>
    )
}

export default App
