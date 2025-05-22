const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "app", "index.js"), // Updated path
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./dist/bundle.js",
        publicPath: "/",
    },
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
