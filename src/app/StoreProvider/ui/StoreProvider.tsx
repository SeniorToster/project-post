import { Provider } from 'react-redux'
import { type ReactNode } from 'react'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
    children: ReactNode
    initialState?: StateSchema
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    return (
        <Provider store={createReduxStore(initialState)}>
            {children}
        </Provider>
    )
}
