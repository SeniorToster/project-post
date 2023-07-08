import { RenderLayout } from 'shared/lib/tests/renderLayout'
import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import userEvent from '@testing-library/user-event'

describe('Counter component', () => {
    test('рендер счётчика', () => {
        RenderLayout(<Counter/>, { initialState: { counter: { value: 10 } } })
        expect(screen.getByTestId('value')).toHaveTextContent('10')
    })

    test('увелечения счётчика', () => {
        RenderLayout(<Counter/>, { initialState: { counter: { value: 10 } } })
        const toggleBtn = screen.getByTestId('btn-inc')
        userEvent.click(toggleBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('11')
    })

    test('уменьшение счётчика', () => {
        RenderLayout(<Counter/>, { initialState: { counter: { value: 10 } } })
        const toggleBtn = screen.getByTestId('btn-dec')
        userEvent.click(toggleBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('9')
    })

    test('сброс счётчика', () => {
        RenderLayout(<Counter/>, { initialState: { counter: { value: 10 } } })
        const toggleBtn = screen.getByTestId('btn-res')
        userEvent.click(toggleBtn)
        expect(screen.getByTestId('value')).toHaveTextContent('0')
    })
})
