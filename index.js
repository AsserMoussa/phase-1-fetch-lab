function fetchBooks() {
  const response =  fetch("https://anapioficeandfire.com/api/books")
  .then(function(response) {
    var json1 = response.json();
    return json1;
    //renderBooks(json1); 
  })
  .then(function(data){
renderBooks(data);
  })
  return response;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
