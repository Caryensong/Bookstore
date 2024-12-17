// let favoritesBooksNumber =[];
 // for(let t = 0; t < storedBooks.length; t++) {
  //     if(storedBooks[t].liked === true){
  //       favoritesBooksNumber.push(t);     
  //      } else { 
  //       continue;
  //     } 
let favoritesBooks =[];

function renderFavorits(){
  const storedBooks = JSON.parse(localStorage.getItem('updateBookStore'));
  favoritesBooks = storedBooks.filter(book => book.liked === true);
  if (storedBooks) {
     let booksCardsRef = document.getElementById("booksCards");
     booksCardsRef.innerHTML = "";
  
  for(let t = 0; t < favoritesBooks.length; t++) {
      booksCardsRef.innerHTML += getFavbooksTemplate(t);
 }
   }
 }

 function getFavbooksTemplate(i){
  let book = favoritesBooks[i];
  let likeBtn = likesButtonTemplates(i, book.liked);
  let commentsHTML = commentsTemplates(book.comments);
  
  return getCardTemplate(i, book, likeBtn, commentsHTML);
}