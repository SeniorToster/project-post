import { type StateSchema } from 'app/StoreProvider'

export const getCounter = (state: StateSchema) => state.counter
