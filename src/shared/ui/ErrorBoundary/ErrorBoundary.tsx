import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'

interface Props {
    children: ReactNode
    fullback: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError (_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    public componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render () {
        if (this.state.hasError) {
            return (<Suspense fallback={''}> {this.props.fullback} </Suspense>)
        }

        return this.props.children
    }
}

export default ErrorBoundary
