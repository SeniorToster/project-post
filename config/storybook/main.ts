import type { StorybookConfig } from '@storybook/react-webpack5'
import { cssLoaderFunc } from '../build/loaders/cssLoader'
import path from 'path'
import { svgLoaderFunc } from '../build/loaders/svgLoader'
import webpack from 'webpack'
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
    staticDirs: ['../../public'],
    webpackFinal: async config => {
        // @ts-expect-error: can't be undefined
        config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
        // @ts-expect-error: can't be undefined
        config.module.rules = config.module.rules.map((rule) => {
            // @ts-expect-error: can't be undefined
            if (/svg/.test(rule.test)) {
                // @ts-expect-error: can't be undefined
                return { ...rule, exclude: /\.svg$/i }
            }
            return rule
        })
        // @ts-expect-error: can't be undefined
        config.module.rules.push(cssLoaderFunc(true))
        // @ts-expect-error: can't be undefined
        config.module.rules.push(svgLoaderFunc())
        // @ts-expect-error: can't be undefined
        config.plugins.push(new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(true)
        }))
        return config
    }

}
export default config
