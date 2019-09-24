const path = require('path');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

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
                // 实现lodash内部模块的按需引入，减小打包体积
                loader: 'babel-loader',
                options: {
                    plugins: ['lodash'],
                    presets: ['@babel/preset-env']
                }
            }, {
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
        // 进一步减小lodash的打包体积
        new LodashModuleReplacementPlugin
    ]
};