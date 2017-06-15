var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        port: 3000,
        hot: false,
        inline: true,
        historyApiFallback: true,
        stats: {
            colors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}], 'react'],
                        plugins: []
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV':'"development"'})
    ]
};