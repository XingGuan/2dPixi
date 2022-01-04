const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            //   {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            //   },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'asset/img/[name].[ext]',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader','sass-loader'],
            },
        ],
    },
    plugins: [ //使用插件
        new HtmlWebpackPlugin({ //因为要生成两个不同的html文件，所以要new两次
            filename: 'index.html', //filename指定生成html文件名
            template: 'index.html', //template指定打包参照的模板
        }),
    ]

};