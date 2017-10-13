var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 
var OptimizeJsPlugin = require('optimize-js-plugin')

module.exports = {
    entry: [
            'react-hot-loader/patch',
        './src/index.js'
    ],
        output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html',
        filname: 'index.html',
        inject: 'body',
    }),
    new OptimizeJsPlugin({
        sourceMap: false
    })
    ]
};

var env = process.env.NODE_ENV;
console.log('NODE_ENV:', env);