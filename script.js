let books = [
   {
     "name": "Die Geheimnisse des Ozeans",
     "author": "Clara Meer",
     "likes": 1250,
     "liked": true,
     "price": 19.99,
     "publishedYear": 2018,
     "genre": "Fantasy",
     "comments": [
       {
         "name": "Leser123",
         "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
       },
       {
         "name": "Bookworm84",
         "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
       },
       {
         "name": "FantasyFanatic",
         "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
       },
       {
         "name": "SciFiGuru",
         "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
       },
       {
         "name": "NovelLover",
         "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
       }
     ]
   },
   {
     "name": "Der vergessene Pfad",
     "author": "Maximilian Schwarz",
     "likes": 980,
     "liked": false,
     "price": 14.50,
     "publishedYear": 2021,
     "genre": "Fantasy",
     "comments": []
   },
   {
     "name": "Die Farben des Himmels",
     "author": "Laura Blau",
     "likes": 1520,
     "liked": true,
     "price": 22.95,
     "publishedYear": 2019,
     "genre": "Romantik",
     "comments": [
       {
         "name": "LeserPeter",
         "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
       },
       {
         "name": "BookLover21",
         "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
       },
       {
         "name": "FantasyNerd",
         "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
       },
       {
         "name": "SciFiEnthusiast",
         "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
       },
       {
         "name": "ReadingAddict",
         "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
       }
     ]
   },
   {
     "name": "Das Rätsel der Zeit",
     "author": "Alexander Weiss",
     "likes": 750,
     "liked": false,
     "price": 18.00,
     "publishedYear": 2020,
     "genre": "Science-Fiction",
     "comments": [
       {
         "name": "BuchKenner",
         "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
       },
       {
         "name": "LeseWurm",
         "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
       }
     ]
   },
   {
     "name": "Der letzte Wächter",
     "author": "Sabine Grün",
     "likes": 1300,
     "liked": true,
     "price": 16.75,
     "publishedYear": 2017,
     "genre": "Fantasy",
     "comments": []
   },
   {
     "name": "Jenseits der Sterne",
     "author": "Oliver Schwarz",
     "likes": 1450,
     "liked": true,
     "price": 21.00,
     "publishedYear": 2015,
     "genre": "Science-Fiction",
     "comments": [
       {
         "name": "Leser123",
         "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
       }
     ]
   },
   {
     "name": "Das verborgene Königreich",
     "author": "Elena Gold",
     "likes": 920,
     "liked": false,
     "price": 17.50,
     "publishedYear": 2020,
     "genre": "Fantasy",
     "comments": [
       {
         "name": "Bookworm92",
         "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
       },
       {
        "name": "Leser123",
        "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
      }
     ]
   }
 ]

let booksImgs = [
  "book.png",
  "book1.png",
  "book2.png",
  "book.png",
  "book1.png",
  "book2.png",
  "book2.png",
];

 function init(){
  let booksCardsRef =document.getElementById('booksCards');
  for (let i = 0; i < books.length; i++) {
    booksCardsRef.innerHTML += getbooksTemplate(i);
    }
  }
 