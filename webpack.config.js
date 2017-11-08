var path = require('path');
var webpack = require('webpack');

// Local environment file

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
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
                        // options: {
                        //     limit: 10240,
                        // },
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),

        // new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors

    ],

    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
    },
};
