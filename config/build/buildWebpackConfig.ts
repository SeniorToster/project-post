import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoader";
import {buildResolve} from "./buildResolve";

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {
 const {mode,paths} = options
    return   {
        mode,
        entry: paths.entry ,
        output: {
        filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
    },
        plugins: buildPlugins(paths),
            module: {
        rules: buildLoader()
    },
        resolve: buildResolve()

    };
}