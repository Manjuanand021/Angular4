 const merge = require('webpack-merge');
 const common = require('./webpack.config.common');
 const path = require('path');

 module.exports = merge(common, {
     devtool: 'cheap-source-map',
     devServer: {
         contentBase: path.resolve(__dirname, '../dist'),
         port: 3001,
         historyApiFallback: true //This tells webpack dev server to fallbackt o index.html when route is not matched
     }
 });