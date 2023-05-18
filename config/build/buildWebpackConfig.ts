import {BuildOptions} from "./types/config";
import {Configuration } from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoader";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) : Configuration {
 const {mode,paths, isDev} = options
    return   {
        mode,
        entry: paths.entry ,
        output: {
        filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
    },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        },
        plugins: buildPlugins(paths),
            module: {
        rules: buildLoader(options)
    },
        resolve: buildResolve(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: buildDevServer(options)

    };

}
