const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:'./web/components/index.jsx',
    output: {
        path:path.join(__dirname,'/web'),
        filename:'bundle.js',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:['css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devServer:{
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./web/index.html'
        })
    ]
}