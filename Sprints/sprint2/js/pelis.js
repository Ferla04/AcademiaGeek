let moviesCard = document.getElementById('movies');
let contCards;
let nameMovie;
let contImgMovie;
let imgMovie;

const MOVIES = [
    {name: 'Avengers: Endgame', scr:'images/avengers.png'},
    {name: 'El Escuadrón Suicida', scr:'images/squad.jpg'},
    {name: 'Rápidos y Furiosos 9', scr:'images/fastFurious.jpg'},
    {name: 'Bolt: Un perro fuera de serie', scr:'images/bolt2.jpg'},
    {name: 'Hansel & Gretel: Cazadores de brujas', scr:'images/hanselGretel.jpg'},
    {name: 'X-Men: primera generación', scr:'images/xMen.jpg'},
    {name: 'Free Guy: tomando el control', scr:'images/freeGuy.jpg'},
    {name: 'La decisión más difícil', scr:'images/sister.jpg'},
    {name: 'Maléfica', scr:'images/maleficent2.jpg'},
    {name: 'The Master', scr:'images/master.jpg'},
    {name: 'Vita & Virginia', scr:'images/vita.jpg'},
    {name: 'Halloween Kills', scr:'images/halloween.jpg'},
]

for(const i in MOVIES){
    contCards = document.createElement('article');
    nameMovie = document.createElement('h2');
    imgMovie = document.createElement('img');
    //HIJOS DE ETIQUETAS
    moviesCard.appendChild(contCards);
    contCards.appendChild(imgMovie);
    contCards.appendChild(nameMovie);
    nameMovie.innerHTML = MOVIES[i].name;
    imgMovie.setAttribute('src', MOVIES[i].scr);
}

