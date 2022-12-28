const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[contenthash].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            minify: false,
        }),
    ],
};
