const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none', //开发模式
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [ //使用插件
        new HtmlWebpackPlugin({ //因为要生成两个不同的html文件，所以要new两次
            filename: 'index.html', //filename指定生成html文件名
            template: 'index.html', //template指定打包参照的模板
        }),
    ],
    devServer: {
        //配置服务端口号
        port: 8090,
        // 打开热更新开关
        hot: true,
        //设置基本目录结构
        static: path.resolve(__dirname, 'src'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: '172.16.2.114',
        //服务端压缩是否开启
        compress: true,
    },
};