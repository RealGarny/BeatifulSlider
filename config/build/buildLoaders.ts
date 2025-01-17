import webpack from "webpack";
import BuildOptions from "./types/buildWebpackConfig";
import { buildCssLoader } from "./loaders/buildCssLoader";

function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoader(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: ["file-loader"],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}

export default buildLoaders;
