import {BuildOptions, BuildPerformance} from "./types/config";


export function buildPerformance(options: BuildOptions) : BuildPerformance {
    return {
        hints: false,
        maxAssetSize:options.performanceBundle,
        maxEntrypointSize: options.performanceBundle
    }

}