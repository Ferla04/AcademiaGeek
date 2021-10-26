const register = document.getElementById('register');
const login = document.getElementById('login');
const nameC = document.getElementById('name');
const nameUser = document.getElementById('nameUser');
const email = document.getElementById('email');
const password = document.getElementById('password');
const lEmail = document.getElementById('lEmail');
const lPassword = document.getElementById('lPassword');
const button = document.getElementById('chButton'); 
const message = document.getElementById('message');

function createUser(){
    localStorage.setItem('Nombre', nameC.value);
    localStorage.setItem('Usuario', nameUser.value);
    localStorage.setItem('Correo', email.value);
    localStorage.setItem('Contraseña', password.value);
}

function checkUser(){

    let correo = localStorage.getItem('Correo');
    let contraseña = localStorage.getItem('Contraseña');

    if(lEmail.value.length == 0 || lPassword.value == 0){
        return console.log('campo vacio');
    }else if( correo != lEmail.value || contraseña != lPassword.value){
        message.style.display = 'block';
        message.innerHTML = `Usuario y/o Contraseña Inválidos`;
    }else {
        message.style.display = 'none';
        setTimeout( function() { window.location.href = "../page.html"; }, 500 );
    }
}

function changeName(){
    let tag = document.getElementById('loginRegister');

    if(tag.innerHTML == 'Sign up'){
        tag.innerHTML = 'Login';
        login.style.display = 'none';
        register.style.display = 'flex';
        message.style.display = 'none';
    }else{
        tag.innerHTML = 'Sign up';
        login.style.display = 'flex';
        register.style.display = 'none';
    }
}