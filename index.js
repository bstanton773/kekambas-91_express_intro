const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/apple', (req, res) => {
    res.send('This is apple')
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
