function cards(){

  var title = ["Another Tetris","Ghostle","Kinder Fighter","Picotale","Lizard and the Magic Doors","Ascii Exporter","Shotguin","Dungeons and Axes","PPT:Fighter Game","Peter The Giraffe","Project G","Moetale","I want my candies now!","Help Between Worlds","Go out with the Mini Uzi","The Legend of Pencil","Hook Game"]
  var description = ["Just another Tetris",
              "A little game about ghost and puzzle",
              "avoid the baby fight",
              "Sans Battle in Pico-8",
              "Super Meat Boy like game",
              "Transform image and video to ascii",
              "a Penguin with shotgun",
              "a little roguelike that are played with the mouse",
              "Rock, Scissor and Paper ",
              "Explore a little and cozy town",
              "A 3D telekinetic action game ",
              "Sans battle inspiration",
              "A game about halloween",
              "Help the boy to throw the forest, or not?",
              "Just go out",
              "A the Legend of Zelda inspirated game",
              "Dota 2 minigame"]
  var image = ["https://img.itch.zone/aW1nLzE1OTAzNDk4LmdpZg==/315x250%23cm/YyFTpf.gif",
              "https://img.itch.zone/aW1nLzE1ODQxMDc0LmdpZg==/315x250%23cm/qrzgg7.gif",
              "https://img.itch.zone/aW1nLzExMjM5MTkyLnBuZw==/315x250%23c/PiiM6I.png",
              "https://img.itch.zone/aW1nLzk2Mjg3MTUucG5n/315x250%23c/WooV%2BE.png",
              "https://img.itch.zone/aW1nLzg5Mjc2NTUuZ2lm/315x250%23cm/CXH6jG.gif",
              "https://img.itch.zone/aW1nLzg0MTEyMTkuZ2lm/315x250%23cm/EElktb.gif",
              "https://img.itch.zone/aW1nLzc5NDY4OTMucG5n/315x250%23c/Zmuexp.png",
              "https://img.itch.zone/aW1nLzcwMjQ0MzYuZ2lm/315x250%23cm/OCgo22.gif",
              "https://img.itch.zone/aW1nLzY5MzU2NTQuZ2lm/315x250%23cm/Z83Eo3.gif",
              "https://img.itch.zone/aW1nLzY4ODU4NDkucG5n/315x250%23c/BWTgZP.png",
              "https://img.itch.zone/aW1nLzY3MzUwMTgucG5n/315x250%23c/9fXD8W.png",
              "https://img.itch.zone/aW1nLzU4MTQ5MTMuZ2lm/315x250%23cm/YijB98.gif",
              "https://img.itch.zone/aW1nLzQ1MTQ5NzUucG5n/315x250%23c/nG%2FwBZ.png",
              "https://img.itch.zone/aW1nLzQyNzA3NDMucG5n/315x250%23c/kVt0dq.png",
              "https://img.itch.zone/aW1nLzQxMTY5OTEuanBn/315x250%23c/dP8ze1.jpg",
              "https://img.itch.zone/aW1nLzQwMzk4NjYucG5n/315x250%23c/a4FPLX.png",
              "https://img.itch.zone/aW1nLzI4NTA3NjYucG5n/315x250%23c/7V1PGV.png"]

  links = ["another-tetris","ghostle","kinder-fighter","picotale","lizard-and-the-magic-doors","ascii-exporter","shotguin","dungeons-and-axes","ppt","peter-the-giraffe","project-g","moetale","i-want-my-candies-now","help-between-worlds","gowmu","tlop","hookgame"]

  for (let i = 0; i < title.length; i++) {
    addCard(title[i],description[i],image[i],"https://luife.itch.io/"+links[i])
    
  }
}



function addCard(title, description, image, link) {
  // Crea un nuevo elemento de tarjeta
  const card = document.createElement("div");
  card.classList.add("card", "mb-3");

  // Crea un nuevo elemento de fila
  const row = document.createElement("div");
  row.classList.add("row", "g-0");

  // Crea un nuevo elemento de columna para la imagen
  const colImage = document.createElement("div");
  colImage.classList.add("col-6");
  colImage.style.display= "flex"
  colImage.style.alignContent= "center"
  // Crea un nuevo elemento de imagen
  const imageElement = document.createElement("img");
  imageElement.classList.add("img-fluid", "rounded-start");
  imageElement.setAttribute("src", image);
  imageElement.setAttribute("alt", "");
  imageElement.style.objectFit =  "cover"

  // Añade la imagen a la columna de imagen
  colImage.appendChild(imageElement);

  // Crea un nuevo elemento de columna para el contenido
  const colContent = document.createElement("div");
  colContent.classList.add("col-6");

  // Crea un nuevo elemento de cuerpo de tarjeta
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");


  // Crea un nuevo elemento de título de tarjeta
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;
  cardTitle.style.width = "100%";

  // Crea un nuevo elemento de descripción de tarjeta
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = description;

  // Crea un nuevo elemento de enlace de tarjeta
  const cardLink = document.createElement("a");
  cardLink.classList.add("btn", "btn-primary");
  cardLink.setAttribute("href", link);
  cardLink.textContent = "View";

  // Añade el título, la descripción y el enlace al cuerpo de la tarjeta
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardLink);

  // Añade el cuerpo de la tarjeta a la columna de contenido
  colContent.appendChild(cardBody);

  // Añade la columna de imagen y la columna de contenido a la fila
  row.appendChild(colImage);
  row.appendChild(colContent);

  // Añade la fila a la tarjeta
  card.appendChild(row);

  // Añade la tarjeta al contenedor principal
  const container = document.getElementById("cards");
  container.appendChild(card);
}


window.addEventListener("scroll", function() {
  const logo = document.getElementById("logo");
  const banner = this.document.getElementById("banner");
   const nav = this.document.getElementById("navbar-na");
  if (window.pageYOffset >= 250) {
    // Mover el logo a la parte izquierda
   logo.style.transition = "transform 1s";
    logo.style.transform = "translateX(40px)";
    banner.style.display = "none";
     nav.style.transition = "opacity 1s";
    nav.style.opacity = "1";
    // logo.style.justifyContent = "left";
  } else {
    // Mover el logo de vuelta a la posición original
    logo.style.transition = "transform 1s";
    banner.style.display = "flex";
    logo.style.transform = "translateX(100% )";
    nav.style.transition = "opacity 1s";
    nav.style.opacity = "0";
    // logo.style.justifyContent = "center";
  }
});


