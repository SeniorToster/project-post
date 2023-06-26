import type { Preview } from '@storybook/react'
import { WithThemeProvider } from './decorators/WithThemeProvider'

const preview: Preview = {
    parameters: {
        backgrounds: { disable: true }
    },
    decorators: [WithThemeProvider],
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true
            }
        }
    }
}

export default preview
