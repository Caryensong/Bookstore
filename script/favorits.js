let likeBooks = books.filter(book => book.liked === true);

console.log(likeBooks);

function renderFavorits(){
   let booksCardsRef = document.getElementById("booksCards");

   for (let i = 0; i < likeBooks.length; i++) {
     booksCardsRef.innerHTML += getbooksTemplate(i);
   }
 }
