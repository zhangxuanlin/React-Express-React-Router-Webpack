const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintFriendlyFormatter = require('eslint-friendly-formatter');

module.exports = {
    entry: [
        "webpack-hot-middleware/client?reload=true",
        __dirname + "/app/app.js"  // 入口
    ],
    output: {               // 出口
        path: path.resolve(__dirname, "./build"), // 打包后文件存放的路径
        filename: "bundle.js",  // 打包后的文件名
        publicPath: '/' // 静态资源的公共路径，编译后不知道最终输出路径（编译后HTML文件引入js文件不设置会发生错误../../build/bundle.js）
    },
    module: {   // 加载loader
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'app'),
                ],
                use: {
                    loader: 'eslint-loader',
                    options: {
//                      cache: true,
                        formatter: EslintFriendlyFormatter,
                    },
                },
            },
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["es2015", "react", "stage-1"],    // 可编译jsx格式
                        plugins: [
                            ["import", {
                                libraryName: "antd",
//                              libraryDirectory: "es",
                                style: "css"
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
//                          modules: true,
                            importLoaders: 1,
                        }
                    }, {
                        loader: "postcss-loader"    // css自动加前缀，配合根目录postcss.config.js使用
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: __dirname + '/build/index.html',
            template: __dirname + '/app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin() // Tell webpack we want hot reloading
    ],
    resolve: {
        //require文件的时候不需要写后缀了，可以自动补全
        extensions: [".js", ".jsx", ".css", ".react.js"]
    }
}
