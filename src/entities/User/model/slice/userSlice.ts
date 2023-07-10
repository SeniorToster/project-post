import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../type/userSchema'

export const initialState: UserSchema = {}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout (state) {
            return initialState
        }
    }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
