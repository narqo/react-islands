var path = require('path');
var webpack = require('webpack');

const plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', 2),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
    }),
];

module.exports = {
    context: path.join(__dirname, './src'),
    entry: {
        index: './index.js',
        html: './index.html',
        vendor: [
            'react',
            'react-dom',
        ],
    },
    output: {
        path: path.join(__dirname, 'showcase'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: [
                    path.join(__dirname, 'src'),
                ]
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src',
    },
    plugins,
};
