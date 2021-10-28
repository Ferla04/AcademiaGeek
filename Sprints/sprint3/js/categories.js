//cambiar categoria
const aMovie = document.getElementById('aMovie');
const cart = document.getElementById('cart');
const categories = document.getElementById('categories');
const category1 = document.getElementById('category1');
const category2 = document.getElementById('category2');
const footer = document.getElementById('footer');
//productos
const products1 = document.getElementById('products1');
const products2 = document.getElementById('products2');
//pelicula selecccionada MODAL
const contModal = document.getElementById('contModal');
const selectMovie = document.getElementById('selectMovie');
//variables html 
let contMovies;
let h3M;
let imgM;
let priceM;
//Cuenta los productos
let countCart = document.getElementById('countCart');
let countCartValue = 0;

const MOVIES = [
    {name: 'suicide+squad', date:'6-agosto-2021', money:'167,4 millones', director:' James Gunn'},
    {name: 'Fast+%26+Furious', date:'2-abril-2015', money:'1.516 millones', director:'James Wan'},
    {name: 'Free+Guy', date:'13-agosto-2021', money:'326,1 millones', director: 'Shawn Levy'},
    {name: "My+Sister's+Keeper", date:'6-noviembre-2009', money:'203.7 millones', director:'Nick Cassavetes'},
    {name: 'Avengers:Endgame', date:'25-abril-2019', money:'2.798 miles de millones', director:'Anthony y Joe Russo'},
    {name: 'Hansel+%26+Gretel+Witch+Hunters', date:'25-enero-2013', money:'538.8 millones', director:'Tommy Wirkola'},
    {name: 'Bolt', date:'21-noviembre-2008', money:'310 millones', director:'Chris Williams'},
    {name: 'Wreck-It+Ralph', date:'30-noviembre-2012', money:'473.4 millones', director:'Rich Moore'},
    {name: 'Vita+%26+Virginia', date:'5-julio-2019', money:'80.2 millones', director:'Chanya Button'},
    {name: 'Maleficent%3A+Mistress+of+Evil', date:'28-mayo-2014', money:'$ 758.4 millones', director:'Robert Stromberg'},
    {name: 'X-Men%3A+Apocalypse%27', date:'18-mayo-2016', money:'543.9 millones', director:'Bryan Singer'},
    {name: 'Halloween+Kills', date:'21-octubre-2021', money:'56 millones', director:'David Green'},
];

const STATUS_MOVIES = [
    {num: 0, count: 0, price: 10, activeM: false},
    {num: 1, count: 0, price: 45, activeM: false},
    {num: 2, count: 0, price: 47, activeM: false},
    {num: 3, count: 0, price: 85, activeM: false},
    {num: 4, count: 0, price: 12, activeM: false},
    {num: 5, count: 0, price: 49, activeM: false},
    {num: 6, count: 0, price: 36, activeM: false},
    {num: 7, count: 0, price: 46, activeM: false},
    {num: 8, count: 0, price: 30, activeM: false},
    {num: 9, count: 0, price: 56, activeM: false},
    {num: 10, count: 0, price: 51, activeM: false},
    {num: 11, count: 0, price: 24, activeM: false}
]

//CAMBIAR DE VISTAS
function changeView(option){
    if(option == 'ct1'){
        category1.style.display = 'block';
        category2.style.display = 'none';
    }else{
        category1.style.display = 'none';
        category2.style.display = 'block';
    }
}

function toCart(){
    cart.style.display = 'block';
    categories.style.display = 'none';
    aMovie.style.borderBottom = 'none';
    footer.style.display = 'none';
}

function toCategories(){
    cart.style.display = 'none';
    categories.style.display = 'flex';
    aMovie.style.borderBottom = '2px solid #f9c301';
    footer.style.display = 'block';
}
/////////////////////////////////

//----------- API ----------------
function getApi(movie,nameMovie,imgMovie){
    const API = `http://www.omdbapi.com/?apikey=80b8bd99&s=${movie}`

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let data = JSON.parse(xhttp.responseText);
            nameMovie.innerHTML = data.Search[0].Title;
            imgMovie.setAttribute('src', data.Search[0].Poster)
        }
    }
    xhttp.open('GET', API);
    xhttp.send()
}


MOVIES.forEach((e,i) => {
    contMovies = document.createElement('div');
    h3M = document.createElement('h3');
    imgM = document.createElement('img');
    priceM = document.createElement('p');
    
    contMovies.className = 'cards';
    h3M.className = 'nameMovie';
    // contMovies.setAttribute('id',`m${i}`)
    contMovies.appendChild(h3M);
    contMovies.appendChild(imgM);
    contMovies.appendChild(priceM);

    priceM.innerHTML =`Price: $${STATUS_MOVIES[i].price}`;

    if(i < 6){
        products1.appendChild(contMovies);
    }else{
        products2.appendChild(contMovies);
    }

    getApi(e.name,h3M,imgM);
});


let cards = document.querySelectorAll('.cards');
let nameMovies = document.querySelectorAll('.nameMovie');
//MODAL
let imgT;
let contInfo;

cards.forEach((e,i) =>{
    e.addEventListener('click', el =>{
        contModal.style.display = 'flex';
        imgT = document.createElement('img');
        contInfo = document.createElement('div');
        getApi(MOVIES[i].name,'.',imgT)
        selectMovie.appendChild(imgT);
        selectMovie.appendChild(contInfo);

        contInfo.innerHTML = `
            <h2>${nameMovies[i].innerHTML}</h2>
            <p><span>Year: </span>${MOVIES[i].date}</p>
            <p><span>Collection: </span>${MOVIES[i].money}</p>
            <p><span>Director: </span>${MOVIES[i].director}</p>
            <p><span>Price: </span>$${STATUS_MOVIES[i].price}</p>
            <p id="c${i}"><span>Count: </span>${STATUS_MOVIES[i].count}</p>
            <input type="number" class="inputPrice" placeholder="num">
            <button id="s${i}">add</button>
        `
        addProduct(i);
    })
})

//CERRAR MODAL
function closeModal(){
    contModal.style.display = 'none';
    imgT.remove();
    contInfo.remove();
}



