const books = [
    {id: 125321, book: 'The Secret', read: true},
    {id: 456904, book: 'A dollar  a day', read: true},
    {id: 321608, book: 'How to talk that little kids  will listen', read: true},
    {id: 321543, book: 'The gangs of  New York', read: false},
    {id: 000221, book: 'D-Day', read: false},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
  };
  
  function getAll() {
    return books;
  }
  function getOne(id){
    id = parseInt(id);
    return books.find(book => book.id === id);

  }
  function create(book) {
    //Add the id
    book.id = Date.now() % 100000;
    book.read = false;
    books.push(book);
  }

function deleteOne(id) {
  id = parseInt(id)
  const idx = books.findIndex(book => book.id === id)
  books.splice(idx, 1)
}
  
function updateOne(formData, id) {
  id = parseInt(id)
  const book = books.find(book => book.id === id)
  book.book = formData.book
  if(formData.read) {
      book.read = true
  } else {
      book.read = false
  }
}