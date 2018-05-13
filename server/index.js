const express = require('express');
const webpack = require('webpack');
const path = require('path');
const WebpackDevMiddleware = require('webpack-dev-middleware'); // 监控文件，有变化重启服务器
const WebpackHotMiddleware = require('webpack-hot-middleware'); // 页面有更新，浏览器自动刷新，热加载
const webpackConfig = require('../webpack.config');

const app = express();
const complier = webpack(webpackConfig);

app.use(express.static(path.resolve(__dirname, 'build')));
app.use((req, res, next) => {
//  console.log(req.hostname, 66);
    next();
});

app.use(WebpackDevMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    noInfo: false,
}));

app.use(WebpackHotMiddleware(complier));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('/build/index.html'));
});
//app.get('*', (req, res, next) =>{
//  const filename = path.resolve('/build/index.html');
//  complier.outputFileSystem.readFile(filename, (err, result) =>{
//      if(err){
//          return(next(err))
//      }
//      res.set('content-type', 'text/html')
//      res.send(result)
//      res.end()
//  })
//});
app.listen(3000, () => {
    console.log('启动完成');
});
