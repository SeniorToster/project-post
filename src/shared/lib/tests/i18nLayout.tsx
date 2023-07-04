import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

export const RouterLayout = (component: React.ReactNode) => {
    return render(
        <MemoryRouter initialEntries={['/']}>
            {component}
        </MemoryRouter>
    )
}
