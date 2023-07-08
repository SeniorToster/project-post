import { createSlice } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter'

export const initialState: CounterSchema = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        dec (state) {
            state.value -= 1
        },
        inc (state) {
            state.value += 1
        },
        res () {
            return initialState
        }
    }
})

export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer
