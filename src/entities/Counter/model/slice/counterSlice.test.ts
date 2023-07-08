import { type CounterSchema } from '../type/counterSchema'
import { counterReducer, counterActions, initialState } from './counterSlice'

describe('counterSlice', () => {
    test('decrement value', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.dec)).toEqual({ value: 9 })
    })

    test('increment value', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.inc)).toEqual({ value: 11 })
    })

    test('reset value', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.res)).toEqual(initialState)
    })
})
