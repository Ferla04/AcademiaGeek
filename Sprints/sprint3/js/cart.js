const cartProducts = document.getElementById('cartProducts');
const contTotal = document.getElementById('contTotal');
const totalPrice = document.getElementById('totalPrice');
let sumTotal = 0;

function hola(){
    if(cartProducts.innerHTML.length < 1){
        contTotal.style.display = "none";
        console.log('primera')
    }else{
        contTotal.style.display = "flex";
        console.log('block')
    }
}

function addProduct(i){
    let countM = document.getElementById(`c${i}`)
    let buttonM = document.getElementById(`s${i}`);
    let inputPrice = document.querySelector('.inputPrice');

    buttonM.addEventListener('click', e =>{
        let inputValue = parseInt(inputPrice.value)
        if(inputValue > 0){
            STATUS_MOVIES[i].count += inputValue;
            countCartValue += inputValue;
            countCart.innerHTML = countCartValue;
            countM.innerHTML = `<span>Count: </span>${STATUS_MOVIES[i].count}`;
            console.log(STATUS_MOVIES[i])
            movieSelect(i);
        }
    })
}


function movieSelect(i){

    if(STATUS_MOVIES[i].activeM == true){
        return renew(i)
    }else if(STATUS_MOVIES[i].count > 0 && STATUS_MOVIES[i].activeM == false){

        let valueProducts = document.createElement('div');
        valueProducts.classList = 'valueProducts';
        valueProducts.setAttribute('id', `p${i}`);
        let imgCart = document.createElement('img');
        let divCont = document.createElement('div');
        getApi(MOVIES[i].name,'.',imgCart);

        cartProducts.appendChild(valueProducts);
        valueProducts.appendChild(imgCart);
        valueProducts.appendChild(divCont);

        divCont.innerHTML = `
            <p id="countP${[i]}">${STATUS_MOVIES[i].count}</p>
            <p>$${STATUS_MOVIES[i].price}</p>
            <p id="totalP${i}">$${STATUS_MOVIES[i].count * STATUS_MOVIES[i].price}</p>
            <i class="fas fa-trash-alt" onclick="removeMovie(${i})"></i>
        `
        sumTotal += STATUS_MOVIES[i].count * STATUS_MOVIES[i].price;
        totalPrice.innerHTML =`Total: ${sumTotal}`;
        STATUS_MOVIES[i].activeM = true;
        hola()
    }
    
}

function removeMovie(i){
    let remove = document.getElementById(`p${i}`);
    remove.remove();
    STATUS_MOVIES[i].activeM = false;
    countCartValue -= STATUS_MOVIES[i].count;
    countCart.innerHTML = countCartValue;
    sumTotal -= STATUS_MOVIES[i].price * STATUS_MOVIES[i].count;
    totalPrice.innerHTML =`Total: ${sumTotal}`;
    STATUS_MOVIES[i].count = 0;
    hola()
}

function renew(i){
    let countP = document.getElementById(`countP${i}`);
    let totalP = document.getElementById(`totalP${i}`);
    
    countP.innerHTML = STATUS_MOVIES[i].count;
    totalP.innerHTML = STATUS_MOVIES[i].price * STATUS_MOVIES[i].count;
}

function sendToLocalStorage(){
    localStorage.setItem('Total', sumTotal);
    setTimeout( function() { window.location.href = "../payout.html"; }, 500 );
}