import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions, type BuildPaths } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins (paths: BuildPaths, { isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev)
        }),
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return plugins
}
