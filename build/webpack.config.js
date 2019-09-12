const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve('./'),
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        library: 'feCommon',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    resolve: {
        alias: {
            '@': path.resolve('./src')
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader'
            }, {
                loader: 'tslint-loader',
                options: {
                    fix: true
                }
            }],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};