import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoader({isDev}: BuildOptions) : webpack.RuleSetRule[] {

    const typeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    const scssLoader = {
              test: /\.s[ac]ss$/i,
              use: [
                  MiniCssExtractPlugin.loader,
                  {
                      loader: "css-loader",
                      options: {
                          modules: {
                              auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
                              localIdentName: isDev ? '[local]__[name]_[hash:base64:5]' : '[hash:base64:8]'
                          }
                      },
                  },
                  "sass-loader",
              ],
          }


    return [
        typeScriptLoader,
        scssLoader,
    ]
}