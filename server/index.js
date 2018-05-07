const express = require('express');
const app = express();

app.use(express.static('app'));

app.get('/', (req, res) => {
    res.render('index');
});
app.listen(3000, () => {
    console.log('启动完成');
});
