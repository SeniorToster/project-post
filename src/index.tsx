import React from 'react'
import { createRoot } from 'react-dom/client'
import { StoreProvider } from 'app/StoreProvider/'
import { BrowserRouter } from 'react-router-dom'
import { ErrorPage } from 'pages/ErrorPage'
import { ThemeProvider } from 'app/Theme'
import { App } from 'app/App'
import 'shared/config/i18n/i18nConfig'
import ErrorBoundary from 'shared/ui/ErrorBoundary/ErrorBoundary'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <ErrorBoundary fullback={<ErrorPage/>}>
                    <ThemeProvider>
                        <App/>
                    </ThemeProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>
)
