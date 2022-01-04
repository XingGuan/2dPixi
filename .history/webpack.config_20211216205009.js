const path = require('path');

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
        ],
    },
    plugins: [ //使用插件
        new HtmlWebpackPlugin({ //因为要生成两个不同的html文件，所以要new两次
            filename: 'index.html', //filename指定生成html文件名
            template: 'index.html', //template指定打包参照的模板
            chunks: ['main'] //chunks参数指定要把哪个入口文件打包后嵌入到HTML里，可以是一个也可以是多个
        }),
    ]

};