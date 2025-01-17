import path from "path";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import webpack from "webpack";
import { BuildEnv, BuildPaths } from "./config/build/types/buildWebpackConfig";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        html: path.resolve(__dirname, "public", "index.html"),
        entry: path.resolve(__dirname, "src", "main.tsx"),
        build: path.resolve(__dirname, "dist"),
        src: path.resolve(__dirname, "src"),
    };

    const mode = env.mode || "development";
    const isDev = mode === "development";
    const PORT = env.port || 3000;
    const ci = env.ci;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        ci,
        port: PORT,
    });

    return config;
};
