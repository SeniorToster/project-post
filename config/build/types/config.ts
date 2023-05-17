
export type BuildMode = 'development' | 'production'

export interface  BuildPaths {
    entry: string,
    output: string,
    html: string

}
export interface BuildOptions {
    mode: BuildMode,
    isDev: boolean,
    paths:BuildPaths,
    port: number,
    performanceBundle: number
}
export interface BuildEnv {
    mode: BuildMode,
    port: number
}

export interface BuildPerformance {
    assetFilter?(assetFilename: string): boolean;
    hints?: 'warning' | 'error' | false | undefined;
    maxAssetSize?: number | undefined;
    maxEntrypointSize?: number | undefined;
}