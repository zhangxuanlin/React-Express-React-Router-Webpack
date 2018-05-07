const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve('/build/index.html'));
//  res.render('index');
});
app.listen(8888, () => {
    console.log('启动完成');
});
