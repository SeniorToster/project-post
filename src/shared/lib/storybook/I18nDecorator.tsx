import '../../../app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import 'shared/config/i18n/i18nConfig'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
export const I18nDecorator: Decorator = (Story, context) => {
    const { locale } = context.globals
    const { i18n } = useTranslation()
    console.log(locale)
    useEffect(() => {
        i18n.changeLanguage(locale).catch(console.log)
    },
    [locale])

    return (
        <Suspense fallback={<div>loading translations...</div>}>
            <Story />
        </Suspense>
    )
}
