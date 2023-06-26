import type { StorybookConfig } from '@storybook/react-webpack5'
import { cssLoaderFunc } from '../build/loaders/cssLoader'
import path from 'path'
import { svgLoaderFunc } from '../build/loaders/svgLoader'
const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    webpackFinal: async config => {
        // @ts-expect-error: can't be undefined
        config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
        // @ts-expect-error: can't be undefined
        config.module.rules = config.module.rules.map((rule) => {
            if (/svg/.test(rule.test)) {
                return { ...rule, exclude: /\.svg$/i }
            }
            return rule
        })

        config.module.rules.push(cssLoaderFunc(true))
        config.module.rules.push(svgLoaderFunc())
        return config
    }

}
export default config
