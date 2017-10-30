var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const uglifyJs = new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    comments: false
});

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'static/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(eot|ttf|woff2?|gif|png|jpe?g|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10240,
                        },
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: ["css-loader", "sass-loader"],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ],
    },

    plugins: [
        extractSass,
        uglifyJs
    ]
};
