 const merge = require('webpack-merge');
 const common = require('./webpack.config.common');
 const path = require('path');

 module.exports = merge(common, {
     devtool: 'inline-source-map',
     devServer: {
         contentBase: path.resolve(__dirname, '../dist')
     }
 });