const path = require('path');
const webpack = require('webpack');
//const devConfig = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    devtool: 'source-map',
    entry: {
        app: ['babel-polyfill', './app/index']
    },
    resolve: {alias: {}},
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve",
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'BABEL_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': "jquery",
            'window.$': 'jquery'

        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body'
        }),
    ],
    module: {
        noParse: [],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'app'),
            },
            {
                test: /\.jsx$/,
                loader: "babel",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[local]__[hash:base64:5]')
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader?localIdentName=[local]__[hash:base64:5]!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(eot|com|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};


module.exports = config;