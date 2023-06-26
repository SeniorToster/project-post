import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { cssLoaderFunc } from './loaders/cssLoader'
import { svgLoaderFunc } from './loaders/svgLoader'
export function buildLoader ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.([jt]sx?$)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
            }
        }
    }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
    }

    const svgLoader = svgLoaderFunc()

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const cssLoader = cssLoaderFunc(isDev)

    return [
        babelLoader,
        typeScriptLoader,
        fileLoader,
        svgLoader,
        cssLoader
    ]
}
