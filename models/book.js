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
  };
  
  function getAll() {
    return books;
  }
  function getOne(id){
    id = parseInt(id);
    return books.find(book => book.id === id);

  }