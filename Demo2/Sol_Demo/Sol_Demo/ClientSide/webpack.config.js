const path = require('path');

module.exports = {
    mode: "production", // development

    entry: [
        "./src/TimeDemo/TimeLib.ts",
        "./src/Index.ts"
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: "build.js",
        library: "app"
    }
}