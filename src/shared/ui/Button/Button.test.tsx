import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('classNes', () => {
    test('работа с одним ключём cls объекта', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
})
