const common = require('./webpack.config.common'),
    merge = require('webpack-merge'),
    webpack = require('webpack');


module.exports = merge(common, {
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), // stops the build if there is an error
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
        }),
        // to override options of certain loaders
        // new webpack.LoaderOptionsPlugin({
        //     htmlLoader: {
        //         minimize: false // workaround for ng2
        //     }
        // })
    ]
});