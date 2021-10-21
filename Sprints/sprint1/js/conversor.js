let firstSelect = document.getElementById('firstCoin');
let secondSelect = document.getElementById('SecondCoin');
//others
let inputNum = document.getElementById('inputNumber');
let answer = document.getElementById('answer');
let notice = document.getElementById('notice');
//options
let options2;
//value
let first;
let second;

const COINS = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];
const VALUE_OPTION = ['','dolar','pesoMex','pesoCol','euro','libraEs'];


//------------------------ FUNCIONES --------------------//
function noRepeat(firstSelect,secondSelect){
    options2 = document.querySelectorAll('.slct2');
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

function calculate(firstSelect,secondSelect,inputNum,notice,answer){
    let valueNum = inputNum.value;
    first = firstSelect.value
    second =  secondSelect.value;

    if(first.length < 1 || second.length < 1 || valueNum.length == ''){
        return notice.style.display = 'block';
    }else{
        notice.style.display = 'none';
    }

    answer.innerHTML = `$${conversion(first,second,valueNum)}`;
}


function conversion(first,second,valueNum){
    let result = 0;

    switch (first) {
        case 'dolar':
            switch (second) {
                case 'pesoMex': result = valueNum * 20.21;
                    break;
                case 'pesoCol': result = valueNum * 3768.09;
                   break;
                case  'euro': result = valueNum * 0.86;
                    break;
                case 'libraEs': result = valueNum * 0.72;
                    break;
            }
        break;
        case 'pesoMex':
            switch (second) {
                case 'dolar': result = valueNum * 0.049;
                    break;
                case 'pesoCol': result = valueNum * 186.36;
                   break;
                case  'euro': result = valueNum * 0.042;
                    break;
                case 'libraEs': result = valueNum * 0.036;
                    break;
            }
        break;
        case 'pesoCol':
            switch (second) {
                case 'dolar': result = valueNum * 0.00027;
                    break;
                case 'pesoMex': result = valueNum * 0.0054;
                   break;
                case  'euro': result = valueNum * 0.00023;
                    break;
                case 'libraEs': result = valueNum * 0.00019;
                    break;
            }
        break;
        case 'euro':
            switch (second) {
                case 'dolar': result = valueNum * 1.17;
                    break;
                case 'pesoMex': result = valueNum * 23.57;
                   break;
                case 'pesoCol': result = valueNum * 4391.58;
                    break;
                case 'libraEs': result = valueNum * 0.84;
                    break;
            }
        break;
        case 'libraEs':
            switch (second) {
                case 'dolar': result = valueNum * 1.38;
                    break;
                case 'pesoMex': result = valueNum * 23.57;
                   break;
                case 'pesoCol': result = valueNum * 5206.37;
                    break;
                case 'euro': result = valueNum * 1.19;
                    break;
            }
        break;
    }

    return result;
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

//mensaje
let message = document.createElement('p');
message.setAttribute('id','message');
message.innerHTML = 'por favor ingrese todos los datos';
notice.appendChild(message);

