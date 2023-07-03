import type { Preview } from '@storybook/react'
import { ThemeDecorator } from 'shared/lib/storybook/ThemeDecorator'
import { RoutersDecorator } from 'shared/lib/storybook/RoutersDecorator'
import { I18nDecorator } from 'shared/lib/storybook/I18nDecorator'

const preview: Preview = {
    parameters: {
        backgrounds: { disable: true }
    },
    decorators: [RoutersDecorator, ThemeDecorator, I18nDecorator],
    globalTypes: {
        theme: {
            description: 'глобальное изменине темы',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true
            }
        },
        locale: {
            name: 'Локализация',
            description: 'интернационализация приложения',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', title: 'Английский' },
                    { value: 'ru', title: 'Русский' }
                ],
                showName: true
            }
        }
    }
}

export default preview
