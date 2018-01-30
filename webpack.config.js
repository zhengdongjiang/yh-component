const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'bundle.js',
        library: 'yh-component',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        'antd': true,
        'react': true,
        'react-dom': true
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.jsx?$/, // 文件过滤规则
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'], // es2015 处理 ES6 语法，react 处理 jsx 语法
                    plugins: ['transform-object-rest-spread', 'transform-es2015-destructuring'] // 处理 {...obj}语法
                }
            }
        ]
    }
};