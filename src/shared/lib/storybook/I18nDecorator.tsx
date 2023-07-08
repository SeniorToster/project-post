import 'app/styles/index.scss'
import 'shared/config/i18n/i18nConfig'
import { type Decorator } from '@storybook/react'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
export const I18nDecorator: Decorator = (Story, context) => {
    const { locale } = context.globals
    const { i18n } = useTranslation()
    useEffect(() => {
        i18n.changeLanguage(locale).catch(console.log)
    },
    [locale, i18n])

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            {Story()}
        </Suspense>
    )
}
