import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import React from 'react'
import i18nForTests from 'shared/config/i18n/i18nForTests'

export const RenderLayout = (component: React.ReactNode) => {
    return render(
        <I18nextProvider i18n={i18nForTests}>
            {component}
        </I18nextProvider>
    )
}
