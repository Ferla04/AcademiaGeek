let moviesCard = document.getElementById('movies');
let contCards;
let nameMovie;
let contImgMovie;
let imgMovie;

const MOVIES = ['Avengers:Endgame','suicide+squad','Fast+%26+Furious', "My+Sister's+Keeper",
'Hansel+%26+Gretel+Witch+Hunters', 'X-Men%3A+Apocalypse%27', 'Bolt', 
'Maleficent%3A+Mistress+of+Evil', 'Free+Guy','Vita+%26+Virginia', 'Wreck-It+Ralph', 'Halloween+Kills'];

MOVIES.forEach(e => {
    contCards = document.createElement('article');
    nameMovie = document.createElement('h2');
    imgMovie = document.createElement('img');
    //HIJOS DE ETIQUETAS
    moviesCard.appendChild(contCards);
    contCards.appendChild(imgMovie);
    contCards.appendChild(nameMovie);

    getApi(e,nameMovie,imgMovie);
});

function getApi(movie,nameMovie,imgMovie){
    const API = `http://www.omdbapi.com/?apikey=80b8bd99&s=${movie}`

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(xhttp.responseText);
            // console.log(data.Search[0].Year); 
            // console.log(data.Search[0].Title);
            // console.log(data.Search[0].Poster);

            nameMovie.innerHTML = data.Search[0].Title;
            imgMovie.setAttribute('src', data.Search[0].Poster)
        }
    }
    xhttp.open('GET', API);
    xhttp.send()
}