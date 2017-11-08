var path = require('path');
var webpack = require('webpack');


const uglifyJs = new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    comments: false
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");

// TODO: vendor and app styles as seperate files
const extractSass = new ExtractTextPlugin({
    filename: "style.css",
    disable: false,
});

module.exports = {
    entry: [
        './src/index.js',
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/assets/'
    },

    devtool: 'inline-source-map',

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
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }],
                    fallback: "style-loader",
                }),

            },
        ],
    },

    plugins: [
        extractSass,
        uglifyJs,
    ],
};
