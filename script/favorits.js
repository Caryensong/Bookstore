let favoritesBooksNumber =[];
let favoritesBooks =[];

function renderFavorits(){
  const storedBooks = JSON.parse(localStorage.getItem('updateBookStore'));
  favoritesBooks = storedBooks.filter(book => book.liked === true);

  if (storedBooks) {
     let booksCardsRef = document.getElementById("booksCards");
     booksCardsRef.innerHTML = "";
  
  for(let t = 0; t < storedBooks.length; t++) {
      if(storedBooks[t].liked === true){
        favoritesBooksNumber.push(t);     
       } else { 
        continue;
      } 
  // for(let t = 0; t < favoritesBooks.length; t++) {
      booksCardsRef.innerHTML += getbooksTemplate(t);
 }
   }
 }
