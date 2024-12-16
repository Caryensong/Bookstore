// let likeBooks = books.filter(book => book.liked === true);

let favoritesBooks =[];

function renderFavorits(){
   let booksCardsRef = document.getElementById("booksCards");
   booksCardsRef.innerHTML = "";
  for(let t = 0; t < books.length; t++) {
      if(books[t].liked === true){
        favoritesBooks.push(t);
      } else { 
        continue;
      }
     booksCardsRef.innerHTML += getbooksTemplate(t);
   }
 }
console.log(favoritesBooks);
