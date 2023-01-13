//controllers/books.js

//Convention is to name the model in uppercase and singular

const Book = require('../models/book');

module.exports = {
    index,
    show,
    new: newBook,
    create,
    delete: deleteBook,
    edit,
    update,
};
function index(req, res) {
    res.render('books/index', {
        books: Book.getAll(),
        title: 'All Books'
    });
}

function show(req, res){
    res.render('books/show', {
        book: Book.getOne(req.params.id),
        title: 'Book Details'
    });
}

function newBook(req, res){
    res.render('books/new',
    {title: 'New Book'
});
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Book.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/books');
}
function deleteBook(req, res) {
    Book.deleteOne(req.params.id);
    res.redirect('/books');
  }

  function edit(req, res) {
    res.render('books/edit', {
        title: 'Edit Book',
        book: Book.getOne(req.params.id)
    })
}

function update(req, res) {
    Book.updateOne(req.body, req.params.id)
    res.redirect(`/books/${req.params.id}`)
}