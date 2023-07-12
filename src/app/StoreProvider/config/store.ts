import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUserName/index'

export function createReduxStore (initialState?: StateSchema) {
    const reducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer
    }

    return configureStore<StateSchema>({
        reducer,
        devTools: true,
        preloadedState: initialState
    }
    )
}
