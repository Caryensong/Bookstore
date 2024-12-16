// let likeBooks = books.filter(book => book.liked === true);

let favoritesBooks =[];

function renderFavorits(){
  const storedBooks = JSON.parse(localStorage.getItem('updateBookStore'));

  if (storedBooks) {
     let booksCardsRef = document.getElementById("booksCards");
     booksCardsRef.innerHTML = "";
  
  for(let t = 0; t < storedBooks.length; t++) {
      if(storedBooks[t].liked === true){
        favoritesBooks.push(t);     
       } else { 
        continue;
      } 
      booksCardsRef.innerHTML += getbooksTemplate(t);
 }
   }
 }
console.log(favoritesBooks);
