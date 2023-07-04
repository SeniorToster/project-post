import { type Decorator } from '@storybook/react'
import { Theme } from 'app/Theme'

export const InversDecorator: Decorator = (Story, context) => {
    const theme = context.globals.theme === Theme.DARK ? 'rgb(255 255 255)' : 'rgb(0 0 0)'
    return (
        <div style={{ background: theme }}>
            <Story />
        </div>
    )
}
