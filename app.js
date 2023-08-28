const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');
const Book = require('./models/book')
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/book-logger')

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/books', async (req, res) => {
    const books = await Book.find({});
    res.render('index', { books })
});

app.post('/books', async(req, res) => {
    const book = new Book(req.body.book)
    await book.save();
    res.redirect('/books');

})

app.get('/books/new', (req, res) => {
    res.render('new')
})


app.listen(3000, () => {
    console.log("SERVING ON LOCAL HOST 3000")
})

