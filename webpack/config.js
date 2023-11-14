const path = require("path");
const RunAfterWatchPlugin = require("./plugins/RunAfterWatchPlugin");

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../dist"),
    },
    module: {
        rules: [
            {
                test: /\.(?:ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
    stats: "errors-only",
    plugins: [
        new RunAfterWatchPlugin({
            scriptPath: "./dist/main.js",
            disableRun: false,
        }),
    ],
    devtool: false,
    optimization: {
        usedExports: true,
    },
};
