import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/Theme'
import 'shared/config/i18n/i18nConfig'
import ErrorBoundary from 'shared/ui/ErrorBoundary/ErrorBoundary'
import { ErrorPage } from 'pages/ErrorPage'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary fullback={<ErrorPage/>}>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>
)
