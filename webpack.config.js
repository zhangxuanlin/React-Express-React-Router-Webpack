const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: __dirname + "/app/app.js",  // 入口
    output: {               // 出口
        path: path.resolve(__dirname, "app"), // 打包后文件存放的路径
        filename: "bundle.js",  // 打包后的文件名
    },
    module: {   // 加载loader
        rules: [
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
                  { loader: 'style-loader' },
                  {
                    loader: 'css-loader',
                    options: {
//                    modules: true,
                      importLoaders: 1,
                    }
                  }
                ]
              }
//          {//CSS处理
//              test: /\.css$/,
//              loader: "style-loader!css-loader?modules!./app/assets/style/global.css",
//              exclude: /node_modules/,
//          },
//          {
//              test: /\.css$/,
//              use: [{
//                  loader: "style-loader",
//              }, {
//                  loader: "css-loader",
//                  options: {
////                      modules: true,
//                      importLoaders: 1,
////                      localIdentName: "[local]__[hash:base:8]"
//                  }
//              }]
//          }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        //require文件的时候不需要写后缀了，可以自动补全
        extensions: [".js", ".jsx", ".css", ".react.js"]
    }
}
