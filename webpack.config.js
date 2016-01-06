var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    context: path.join(__dirname, './bundles'),
    entry: {
        jsx: './index.jsx',
        html: './index.html',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: () => [
        autoprefixer,
        precss,
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    ],
    devServer: {
        contentBase: './bundles',
        hot: true,
    }
};
