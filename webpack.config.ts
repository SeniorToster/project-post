import path from 'path'
import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildMode, type BuildPaths } from './config/build/types/config'

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')

}

export default function (env: BuildEnv): webpack.Configuration {
    const PORT: number = isNaN(env.port) ? env.port : 3000
    const mode: BuildMode = env.mode === 'production' ? 'production' : 'development'
    const assetSize: number = 512000
    const isDev: boolean = mode === 'development'

    return buildWebpackConfig({
        mode,
        isDev,
        paths,
        port: PORT,
        performanceBundle: assetSize
    })
}
