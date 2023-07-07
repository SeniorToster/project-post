import '../../../app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import { Theme } from 'app/Theme'
import { useEffect } from 'react'
export const ThemeDecorator: Decorator = (Story, context) => {
    const theme = context.globals.theme === Theme.DARK ? Theme.DARK : Theme.LIGHT

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    return <Story />
}
