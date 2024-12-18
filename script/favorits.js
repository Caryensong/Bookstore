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

function likesButtonFavoritsTemplates(i, isLiked) {
  if (isLiked) {
    return ` <div onclick="removeFromFavoritesPage(${i})">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-heart-fill cursor-pointer" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
       </svg></div>`;
  }
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