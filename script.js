function init() { 
  getFromLocalStorage();
  render(); 
}

function render(){
  let booksCardsRef = document.getElementById("booksCards");
  booksCardsRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    booksCardsRef.innerHTML += getbooksTemplate(i); 
  }
  saveToLocalStorage();
}

function saveToLocalStorage(){
  localStorage.setItem('BookStore', JSON.stringify(books));
 }

function getFromLocalStorage(){
  const storedBooks = JSON.parse(localStorage.getItem('BookStore'));
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
    book.liked = false;
 
  } else {
    book.likes++;
    book.liked = true;
  }  

  likesElement.innerHTML = book.likes;
  likeBtnElement.innerHTML = likesButtonTemplates(i, book.liked);

  saveToLocalStorage();
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
}