const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/books', (req, res) => {
    res.render('index')
})

app.get('/books/new', (req, res) => {
    res.render('new')
})


app.listen(3000, () => {
    console.log("SERVING ON LOCAL HOST 3000")
})

