const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const path = require("path");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: "public/",
}).listen(8083, '127.0.0.1', function (error) {
        if (error) {
            return console.log(error);
        }
        console.log('Server running at http://127.0.0.1:8083/');
});
