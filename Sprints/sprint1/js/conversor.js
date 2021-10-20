let firstSelect = document.getElementById('firstCoin');
let secondSelect = document.getElementById('SecondCoin');
let first;
let second;
const COINS = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
const VALUE_OPTION = ['','dolar','pesoMex','pesoCol','euro','libraEs'];


//------------------------ FUNCIONES --------------------//
function hola(){
    let options2 = document.querySelectorAll('.slct2');
    first = firstSelect.value
    second =  secondSelect.value;

    options2.forEach((e,i)=>{
        if(first == e.value){
            e.style.display = 'none';
            if(first == second){
                secondSelect.selectedIndex = 0;
            }
        }else{
            e.style.display = 'block';
        }
    })
}


//------------------------ CODIGO -----------------------//

//Colocar las opciones
COINS.forEach((e,i)=>{
    if(i == 0){
        firstSelect.innerHTML += `<option value="" selected disabled>${e}</option>`;
        secondSelect.innerHTML += `<option value="" selected disabled>${e}</option>`;
    }else{  
        firstSelect.innerHTML += `<option value="${VALUE_OPTION[i]}">${e}</option>`;
        secondSelect.innerHTML += `<option value="${VALUE_OPTION[i]}" class="slct2" >${e}</option>`;
    }
})






