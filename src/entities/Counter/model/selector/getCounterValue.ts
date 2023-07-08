import { createSelector } from 'reselect'
import { getCounter } from './getCounter'

export const getCounterValue = createSelector(
    getCounter,
    (counter) => counter.value
)
