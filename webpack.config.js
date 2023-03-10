const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

let conf = {
    entry: {
        index: ['./src/index.js'],
    },

    output: {
        filename: '[contenthash].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        clean: true,
    },
    target: ['web', 'es5'],
    devServer: {
        static: './src',
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

module.exports = (env, argv) => {
    console.log('argv', argv)
    if(argv.mode === 'development'){
        conf.target = ['web', 'es5']
        conf.devtool = 'eval-cheap-module-source-map';
    } else {
        conf.target = 'web'
        conf.devtool = 'source-map'
    }
    return conf
}