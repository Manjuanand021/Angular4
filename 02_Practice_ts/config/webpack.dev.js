const baseConfig = require('./webpack.common');
const paths = require('./paths.config');
const helpers = require('./helpers');
//Drop Object.assign and Webpack.merge in favor of spead operator
module.exports = Object.assign(
    baseConfig, {
        devtool: 'eval-source-map',
        output: {
            path: helpers.root(paths.dist.root),
            publicPath: '/',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },
        devServer: {
            /* This tells webpack dev server to fallback to index.html when route is not matched
             * Basically when 404 occurs
             */
            historyApiFallback: true,
            port: 3001,
            stats: 'minimal'
        }
    }
);