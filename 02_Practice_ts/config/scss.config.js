const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: 'assets/css/main.css'
});
module.exports = {
    outputStyle: 'expanded',
    extractScss: extractCSS,
    options: extractCSS.extract({
        use: ['css-loader', 'sass-loader', 'resolve-url-loader'],
        // use style-loader in development
        fallback: "style-loader"
    })
};