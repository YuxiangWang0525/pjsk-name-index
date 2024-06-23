const path = require('path');
const webpack = require('webpack'); // 确保引入了webpack模块

module.exports = {
    entry: './dist/pjskni.js', // 入口文件
    output: {
        filename: 'pjskni.min.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出路径
        library: 'pjskni',
        libraryTarget: 'umd',
    },
    mode: 'production', // 模式设置为生产环境，会对文件进行压缩
    plugins: [
        new webpack.BannerPlugin({
            banner: `/*
 * pjsk-name-index
 * 2022-present Moedigital,YuxiangWang_0525 and pjsk-name-index contributors
 */`,
            raw: true
        })
    ]
};
