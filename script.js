function init() { 
  getFromLocalStorage();
  render(); 
}
let currentPage = "home"; 

function render(){
  let booksCardsRef = document.getElementById("booksCards");
  booksCardsRef.innerHTML = ""; 

  // let booksToRender = currentPage === "favorites" ? favoritesBooks : books;

  for (let i = 0; i < books.length; i++) {
    booksCardsRef.innerHTML += getbooksTemplate(i);
  }
}

function saveToLocalStorage(){
  localStorage.setItem('updateBookStore', JSON.stringify(books));

//  localStorage.setItem('updateFavoriteStore',JSON.stringify(favoritesBooksNumber));
 }

function getFromLocalStorage(){
  const storedBooks = JSON.parse(localStorage.getItem('updateBookStore'));
      if (storedBooks) {
        books = storedBooks;
      }
    }

function btnToFavorite(i) {
  let book = books[i];
  let likesElement = document.getElementById(`bookLikesNum${i}`);  
  let likeBtnElement = document.getElementById(`bookLikeBtn${i}`);

  if (book.liked === true) {
    book.likes--;
    book.liked= false;
  } else {
    book.likes++;
    book.liked = true;
  }  

  likesElement.innerHTML = book.likes;
  likeBtnElement.innerHTML = likesButtonTemplates(i, book.liked);
  saveToLocalStorage(i);
}

function addComment(i) {
  let myCommentInputRef = document.getElementById(`textInput${i}`);
  let myCommentInput = myCommentInputRef.value
  let newComments = books[i].comments;
  newComments.unshift({
    name: "Caryen",
    comment: myCommentInput,
  });

  updateCommentsDisplay(i);
  
  myCommentInputRef.value = "";
}

function updateCommentsDisplay(i) {
  const commentsHTML = commentsTemplates(books[i].comments);
  document.getElementById(`existingComments${i}`).innerHTML = commentsHTML;

  saveToLocalStorage();
  getFromLocalStorage()
}