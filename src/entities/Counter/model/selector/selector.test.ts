import { getCounter } from './getCounter'
import { type DeepPartial } from 'redux'
import { type StateSchema } from 'app/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('selectorCounter', () => {
    test('getCounter возвращает state', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    })

    test('getCounterValue возвращает value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toBe(10)
    })
})
