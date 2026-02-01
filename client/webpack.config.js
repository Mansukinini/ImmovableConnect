const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: path.resolve(__dirname, "src", "app", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
        }),
        new CopyPlugin({
            patterns: [{ from: "public", to: "public" }],
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        static: {
            directory: __dirname, // Serve static files from the root
        },
        historyApiFallback: true,
        port: 8081,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
