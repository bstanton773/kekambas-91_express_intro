const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {firstName: 'Brian'})
})

app.get('/apple', (req, res) => {
    res.send('This is apple')
})

let users = [
    {
        id: 1,
        username: 'brians',
        age: 22
    },
    {
        id: 2,
        username: 'ta7',
        age: 33
    },
    {
        id: 3,
        username: 'jumpman23',
        age: 55
    }
]

app.get('/users', (req, res) => {
    res.render('users', { users })
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
