export const svgLoaderFunc = () => {
    return {
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    }
}
