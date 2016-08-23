var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

config.entry.demo.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server');
config.plugins = config.plugins || [];
config.plugins.push(new webpack.HotModuleReplacementPlugin);

var compiler = new webpack(config);
new webpackDevServer(compiler, {
  hot: true,
  contentBase: './demo/',
  publicPath: '/dist/'
}).listen(8080);