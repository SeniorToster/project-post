import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/Theme'
import 'shared/config/i18nConfig'

const root = createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                 <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
