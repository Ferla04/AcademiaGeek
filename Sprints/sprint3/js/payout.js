const nameI = document.getElementById('nameI');
const email = document.getElementById('email');
const card = document.getElementById('card');
const date = document.getElementById('date');
const cvv = document.getElementById('cvv');


function payProducts(){
    let payInfo = {
        nameI: nameI.value,
        email: email.value,
        card: card.value,
        date: date.value,
        cvv: cvv.value 
    }

    localStorage.setItem('NameI',JSON.stringify(payInfo));
    localStorage.removeItem('total');
}