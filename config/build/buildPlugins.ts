import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import BuildOptions from "./types/buildWebpackConfig";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}

export default buildPlugins;
