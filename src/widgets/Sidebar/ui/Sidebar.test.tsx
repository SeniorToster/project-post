import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { RenderLayout } from 'shared/lib/tests/renderLayout'

describe('Sidebar component', () => {
    test('рендер компонента', () => {
        RenderLayout(<Sidebar/>)
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    })
    test('сворачивание компонента', () => {
        RenderLayout(<Sidebar/>)
        const toggleBtn = screen.getByTestId('Sidebar-toggle')
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
    })
})
