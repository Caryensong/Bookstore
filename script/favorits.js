// let favoritesBooksNumber =[];

let favoritesBooks =[];

function renderFavorits(page){
  const storedBooks = JSON.parse(localStorage.getItem('updateBookStore'));
  favoritesBooks = storedBooks.filter(book => book.liked === true);
  if (storedBooks) {
     let booksCardsRef = document.getElementById("booksCards");
     booksCardsRef.innerHTML = "";
  
  // for(let t = 0; t < storedBooks.length; t++) {
  //     if(storedBooks[t].liked === true){
  //       favoritesBooksNumber.push(t);     
  //      } else { 
  //       continue;
  //     } 

  for(let t = 0; t < favoritesBooks.length; t++) {
      booksCardsRef.innerHTML += getFavbooksTemplate(t);
 }
   }
 }

// function renderFavorits(page) {
//   currentPage = page; // Seite setzen: "home" oder "favorites"
//   let booksCardsRef = document.getElementById("booksCards");
//   booksCardsRef.innerHTML = ""; // Inhalt zurücksetzen

//   let booksToRender = []; // Bücher, die gerendert werden sollen

//   if (page === "favorites") {
//     const storedBooks = JSON.parse(localStorage.getItem('updateBookStore')) || [];
//     booksToRender = storedBooks.filter(book => book.liked === true); // Nur Favoriten filtern
//   } else {
//     const storedBooks = JSON.parse(localStorage.getItem('updateBookStore')) || [];
//     booksToRender = storedBooks; // Alle Bücher anzeigen
//   }

//   Bücher rendern
//   for (let t = 0; t < booksToRender.length; t++) {
//     booksCardsRef.innerHTML += getbooksTemplate(t, booksToRender);
//   }
// }


 function getFavbooksTemplate(i){
  let book = favoritesBooks[i];
  let likeBtn = likesButtonTemplates(i, book.liked);
  let commentsHTML = commentsTemplates(book.comments);

  return `
   <div class="card" style="width: 18rem">
      <div id="bookTitleContent" class="card-header text-white text-center ">
        <p>${books[i].name}</p>
      </div>
        <div id="bookImgContent">
            <img src="./assets/img/${booksImgs[i]}" class="card-img-top rounded-0"/>
        </div> 

      <div id="priceListContent" class="card-body border-top ">
         <div class="price_like">
            <p class="text-danger">${books[i].price.toFixed(2)} €</p>
             <div class="d-flex gap-1">
            <div id="bookLikesNum${i}">${books[i].likes}</div> 
            <div id="bookLikeBtn${i}">${likeBtn}</div>
             </div>
         </div>

         <div id="author" class="row">
            <div class="col-6 ">Autor:</div> <div class="col fw-bold fst-italic text-secondary">${
              books[i].author
            }</div>
         </div>
         <div class="row">
            <div class="col-6 pe-0">Erscheinungsjahr:</div> <div class="col-4 fw-bold text-secondary" >${
              books[i].publishedYear
            }</div>
         </div>
         <div class="row">
            <div class="col-6">Genre:</div><div class="col fw-bold text-secondary">${
              books[i].genre
            }</div>
         </div>
      </div>
    
      <div class="card-footer text-light overflow-auto comment_conent">
         <p><strong>Kommentare:</strong></p>
            <div id="commentList">
               <div id="existingComments${i}">${commentsHTML}</div>
            </div>
      </div>
            <div class="input-group">
              <textarea id="textInput${i}" class="form-control border-bottom" aria-label="With textarea" placeholder="Schreiben dein Kommentar..."></textarea>
              <button class="btn ps-2 pe-2 p-0 cursor-pointer" onclick="addComment(${i})">
              <img src="./assets/icon/send.png" alt="Send"/>
              </button>
            </div>
      </div>
    </div>`;
}

