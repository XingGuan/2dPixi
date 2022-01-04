const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
    // mode: 'development', //开发模式 development,production
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
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
            file: path.join(__dirname, 'dist', 'index.html'),
            template: './index.html', //template指定打包参照的模板
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/asset/',
                to: 'asset/'
            }]
        }),
        //优化图片资源，压缩png。
        // new ImageminPlugin({
        //     test: /\.(jpe?g|png|gif|svg)$/i,

        //     //这种方式压缩在mac上效果不太好
        //     // optipng: {
        //     //   optimizationLevel: 4
        //     // },

        //     //这个方式在mac上压缩效果更好,windows上尚未测试有待验证。
        //     pngquant: {
        //         verbose: true,
        //         quality: '80-90',
        //     }
        // })
    ],
    // devServer: {
    //     //配置服务端口号
    //     port: 8090,
    //     // 打开热更新开关
    //     hot: true,
    //     //设置基本目录结构
    //     static: path.resolve(__dirname, 'src'),
    //     //服务器的IP地址，可以使用IP也可以使用localhost
    //     host: '172.16.2.114',
    //     //服务端压缩是否开启
    //     compress: true,
    // },
    performance: {
        maxEntrypointSize: 1000000,
        maxAssetSize: 200000,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        }
    }
};