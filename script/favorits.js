let favoritesBooks =[];

function renderFavoritsCard(){
  const storedBooks = JSON.parse(localStorage.getItem('favoritesBooks'));
  if (storedBooks) { 
    favoritesBooks = storedBooks.filter(book => book.liked === true);  
     let booksCardsRef = document.getElementById("booksCards");
     booksCardsRef.innerHTML = "";
  
  for(let t = 0; t < favoritesBooks.length; t++) {
      booksCardsRef.innerHTML += getFavbooksTemplate(t);
    }
  }
}

 function getFavbooksTemplate(i){
  let book = favoritesBooks[i];
  let likeBtn = likesButtonFavoritsTemplates(i, book.liked);
  let commentsHTML = commentsTemplates(book.comments);

  return getCardTemplate(i, book, likeBtn, commentsHTML);
}


function removeFromFavoritesPage(i){
  let removedBook = favoritesBooks.splice(i, 1)[0];

  for (let index = 0; index < books.length; index++) {
    if (books[index].name === removedBook.name) {
          books[index].liked = false;
          books[index].likes--;
        
      }
  }
  saveToLocalStorage();
  renderFavoritsCard();
}