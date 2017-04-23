//var LiveReloadPlugin = require('webpack-livereload-plugin');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
//module.exports = {
    
//    entry: {
//        "app": './src/main.ts',
//        "vendor": './src/vendor.ts'
//    } ,
//    output: {
//        filename: '[name].[chunkhash].js',
//        path: '../wwwroot'//__dirname
//    },
//    module: {
//        rules: [
//            {
//                test: /\.tsx?$/,
//                loader: 'ts-loader',
//                exclude: /node_modules/,
//            }
//        ]
//    },
//    resolve: {
//        extensions: [".tsx", ".ts", ".js"]
//    },
//    plugins: [
//        new LiveReloadPlugin(), new HtmlWebpackPlugin()
//    ]
//};