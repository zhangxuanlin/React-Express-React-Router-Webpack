const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('build'));
app.use((req, res, next) => {
//  console.log(req.hostname, 66);
    next();
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve('/build/index.html'));
//  res.render('index', (err, html) => {
//      res.send(html);
//  });
});
app.listen(3000, () => {
    console.log('启动完成');
});
