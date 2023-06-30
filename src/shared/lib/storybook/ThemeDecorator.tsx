import '../../../app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import { Theme } from 'app/Theme'
export const ThemeDecorator: Decorator = (Story, context) => {
    const theme = context.globals.theme === Theme.DARK ? Theme.DARK : Theme.LIGHT
    return (
        <div className={`app  ${theme}`}>
            <Story />
        </div>
    )
}
