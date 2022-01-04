const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
//和common配置文件合并
module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'none',
    //调试用http服务器配置
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
});
console.log('iiiiiiiiiiiiiiiiiii', merge(common, {
    devtool: 'inline-source-map',
    mode: 'none',
    //调试用http服务器配置
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
}))