let favoritesBooks =[];

function renderFavoritsCard(){
  const storedBooks = JSON.parse(localStorage.getItem('BookStore'));
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
  const storedBooks = JSON.parse(localStorage.getItem('BookStore'));
  let removedBook = favoritesBooks[i];

  for (let index = 0; index < storedBooks.length; index++) {
    if (storedBooks[index].name === removedBook.name) {
        storedBooks[index].liked = false;
        storedBooks[index].likes - 1;
          break;
        
      }
  }
  localStorage.setItem('BookStore', JSON.stringify(storedBooks));
  renderFavoritsCard();
}