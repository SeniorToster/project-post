import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
export function buildLoader({isDev}: BuildOptions) : webpack.RuleSetRule[] {

    const babelLoader = {
        test: /\.([jt]sx?$)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            }
        }
    }


    const typeScriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
    }

    const svgLoader ={
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack']
        }

    const fileLoader = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            "sass-loader",
        ],
    }

    return [
        babelLoader,
        typeScriptLoader,
        fileLoader,
        svgLoader,
        cssLoader,
    ]
}
