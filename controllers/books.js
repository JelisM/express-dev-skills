//controllers/books.js

//Convention is to name the model in uppercase and singular

const Book = require('../models/book');

module.exports = {
    index,
    show,
};


function index(req, res) {
    res.render('books/index', {
        books: Book.getAll()
    });
}
function show(req, res){
    res.render('books/show', {
        book: Book.getOne(req.params.id),
    });
}
