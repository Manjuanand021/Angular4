const webpack = require('webpack'),
    path = require('path'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    copyWebpackPlugin = require('copy-webpack-plugin'),
    extractTxtPlugin = require('extract-text-webpack-plugin'),
    babelPlugins = ['__coverage__'],
    helpers = require('./helpers');

const extractSass = new extractTxtPlugin({
    filename: 'assets/css/main.css'
});

module.exports = {
    entry: {
        polyfill: './src/polyfill.js',
        vendor: './src/vendor.js',
        main: './src/main.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                //since we have set context
                exclude: /(node_modules)/,
                query: {
                    //for decorators feature
                    presets: ['env', 'angular2'],
                    plugins: babelPlugins
                }
            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: ['css-loader', 'sass-loader', 'resolve-url-loader'],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }, {
                //incude partials in the byndle itself
                test: /\.html$/,
                use: 'html-loader'
            }, {
                test: /\.(jpeg|jpg|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '/assets/images/'
                    }
                }]
            },
            {
                test: /\.(ttf|otf|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '/assets/fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(['./dist']),
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('../src'), // location of your src
            {} // a map of your routes
        ),
        extractSass,
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfill']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new htmlWebpackPlugin({
            title: 'Angular tutorial',
            template: './src/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    }
};