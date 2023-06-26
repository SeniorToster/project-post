import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button component', () => {
    test('рендер комопнента', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    test('провекра темы на классе', () => {
        render(<Button theme='primary'>test</Button>)
        expect(screen.getByText('test')).toHaveClass('primary')
    })
})
