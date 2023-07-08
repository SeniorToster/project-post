import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import React from 'react'
import i18nForTests from 'shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router'
import { type StateSchema, StoreProvider } from 'app/StoreProvider'
import { type DeepPartial } from 'redux'

export interface RenderLayoutOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export const RenderLayout = (component: React.ReactNode, options: RenderLayoutOptions = {}) => {
    const { route = '/', initialState } = options
    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>)
}
