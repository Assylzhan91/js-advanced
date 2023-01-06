const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: ['./src/index.js'],
        another: ['./src/another.js'],
    },

    output: {
        filename: '[contenthash].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        clean: true,
    },
    target: ['web', 'es5'],
    devtool: process.env.NODE_ENV !== 'production' ? 'eval-cheap-module-source-map' : false,
    devServer: {
        static: './',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            minify: false,
            template: './index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ]
    }
};
