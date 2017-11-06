const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const extractTxtPlugin = require('extract-text-webpack-plugin');
const htmlLoader = require('html-loader');
const paths = require('./paths.config');
const scss = require('./scss.config');
const typescript = require('./typescript.config');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: typescript.options,
                }, 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/images/[name].[hash].[ext]'

            },
            {
                test: /\.(.ttf)$/,
                loader: 'file-loader?name=assets/fonts/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                use: scss.options
            }
            // {
            //     //incude partials in the bundle itself
            //     test: /\.html$/,
            //     use: [{
            //         loader: 'html-loader',
            //         options: {
            //             minimize: true
            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new cleanWebpackPlugin([paths.dist.root + '/']),
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),
        scss.extractScss,
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new HtmlWebpackPlugin({
            title: 'Justice League',
            template: 'src/index.html'
        })
    ]
};