import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'

export const initialState: LoginSchema = { password: '', username: '', status: 'fulfilled' }

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName (state, { payload }: PayloadAction<string>) {
            state.username = payload
        },
        setPassword (state, { payload }: PayloadAction<string>) {
            state.password = payload
        }
    }
})

export const loginActions = loginSlice.actions
export const loginReducer = loginSlice.reducer
