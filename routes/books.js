var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var booksCtrl = require('../controllers/books');
 // All actual paths start with "/books
 //GET /books
 router.get('/', booksCtrl.index)
 router.get('/:id', booksCtrl.show)
module.exports = router;
