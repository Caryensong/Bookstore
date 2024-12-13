function getbooksTemplate(i) {
  let commentsHTML = "";
  if (books[i].comments.length > 0) {
    commentsHTML = books[i].comments
      .map(
        (comment) => `
           <p><strong>[ ${comment.name} ]:</strong> <br>${comment.comment}</p>
         `
      )
      .join("");
  } else {
    commentsHTML = "<p>Keine Kommentare vorhanden.</p>";
  }

  return `
   <div class="card" style="width: 18rem">
      <div id="bookTitleContent" class="card-header text-white text-center">
        <p>${books[i].name}</p>
      </div>
        <div id="bookImgContent">
            <img src="./assets/img/${booksImgs[i]}" class="card-img-top"/>
        </div> 

      <div id="priceListContent" class="card-body border-top ">
         <div class="price_like">
            <p class="text-danger">${books[i].price.toFixed(2)} €</p>
            <p>${books[i].likes}
            
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart text-danger cursor-pointer" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
      
             </p>
         </div>
         <div id="author" class="row">
            <div class="col-6">Autor:</div> <div class="col ">${
              books[i].author
            }</div>
         </div>
         <div class="row">
            <div class="col-6 pe-0">Erscheinungsjahr:</div> <div class="col-4">${
              books[i].publishedYear
            }</div>
         </div>
         <div class="row">
            <div class="col-6">Genre:</div><div class="col">${
              books[i].genre
            }</div>
         </div>
      </div>
    
      <div class="card-footer text-body-secondary overflow-auto comment_conent">
         <p><strong>Kommentare:</strong></p>
            <div id="commentList">
               <div id="myComments">
                  <p><strong>[ Caryen ]:</strong></p>
               </div>

               <div id="existingComments">${commentsHTML} </div>
            </div>
      </div>
            <div class="input-group">
              <textarea class="form-control border-bottom" aria-label="With textarea" placeholder="Schreiben dein Kommentar..."></textarea>
              <button class="btn  ps-2 pe-2 p-0" onclick="addComment(${i})">
              <img src="./assets/icon/send.png" alt="Send"/>
              </button>
            </div>
        
      </div>
    </div>`;
}
