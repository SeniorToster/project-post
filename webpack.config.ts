import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";

const paths: BuildPaths= {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src',)

}

export default function (env: BuildEnv) {
    const PORT: number =env.port || 3000
    const mode : BuildMode = env.mode || "development"
    const assetSize : number = 512000
    const isDev : boolean = mode === 'development'

    const config :webpack.Configuration = buildWebpackConfig({
        mode,
        isDev,
        paths: paths,
        port: PORT,
        performanceBundle:assetSize
    })
return config
}