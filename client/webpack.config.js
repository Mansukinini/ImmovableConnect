const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

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
        new webpack.DefinePlugin({
            'process.env.WEB3FORMS_KEY': JSON.stringify(process.env.WEB3FORMS_KEY || ''),
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        static: {
            directory: __dirname,
        },
        historyApiFallback: true,
        port: 8081,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        ],
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
