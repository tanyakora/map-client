const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

require('babel-polyfill')

const config = {
    entry: {
        app: [
            'babel-polyfill',
            'webpack-dev-server/client?http://127.0.0.1:8083/',
            'webpack/hot/only-dev-server',
            './app/index'
        ],
        vendor: []
    },
    devtool: 'inline-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/public/'),
        historyApiFallback: true,
    },
    output: {
        path: path.join(__dirname, '/public/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new WebpackBrowserPlugin({
            port: 8083,
            url: 'http://127.0.0.1'
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
        new webpack.DefinePlugin({
            "require.specified": "require.resolve",
            'process.env': {
                'NODE_ENV': JSON.stringify('dev'),
                'BABEL_ENV': JSON.stringify('dev')
            }
        })
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