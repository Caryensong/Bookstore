let likeBooks = books.filter(book => book.liked === true);
let favoritesBooks =[];

favoritesBooks.push(...likeBooks);

function renderFavorits(){
   let booksCardsRef = document.getElementById("booksCards");
   booksCardsRef.innerHTML = "";
  for (let t = 0; t < favoritesBooks.length; t++) {
    // let book = favoritesBooks[t];
     booksCardsRef.innerHTML += getbooksTemplate(t);
   }
 }
console.log(favoritesBooks);

// function updateNewFavoriteBooks(book) {
//   let index = books.indexOf(book);
//   let commentsHTML = commentsTemplates(book.comments);
//   let likeBtn = likesButtonTemplates(book, book.liked);

//   return `
// <div class="card" style="width: 18rem">
//    <div id="bookTitleContent" class="card-header text-white text-center ">
//      <p>${book.name}</p>
//    </div>
//      <div id="bookImgContent">
//          <img src="./assets/img/${booksImgs[index]}" class="card-img-top rounded-0"/>
//      </div> 

//    <div id="priceListContent" class="card-body border-top ">
//       <div class="price_like">
//          <p class="text-danger">${book.price.toFixed(2)} €</p>
//           <div class="d-flex gap-1">
//          <div id="bookLikesNum${index}">${book.likes}</div> 
//          <div id="bookLikeBtn${index}">${likeBtn}</div>
//           </div>
//       </div>

//       <div id="author" class="row">
//          <div class="col-6 ">Autor:</div> 
//          <div class="col fw-bold fst-italic text-secondary">${book.author}</div>
//       </div>
//       <div class="row">
//          <div class="col-6 pe-0">Erscheinungsjahr:</div> 
//          <div class="col-4 fw-bold text-secondary">${book.publishedYear}</div>
//       </div>
//       <div class="row">
//          <div class="col-6">Genre:</div>
//          <div class="col fw-bold text-secondary">${book.genre}</div>
//       </div>
//    </div>
 
//    <div class="card-footer text-light overflow-auto comment_conent">
//       <p><strong>Kommentare:</strong></p>
//          <div id="commentList">
//             <div id="existingComments${index}">${commentsHTML}</div>
//          </div>
//    </div>
//          <div class="input-group">
//            <textarea id="textInput${index}" class="form-control border-bottom" aria-label="With textarea" placeholder="Schreiben dein Kommentar..."></textarea>
//            <button class="btn ps-2 pe-2 p-0 cursor-pointer" onclick="addComment(${index})">
//            <img src="./assets/icon/send.png" alt="Send"/>
//            </button>
//          </div>
//    </div>
//  </div>`;
// }


