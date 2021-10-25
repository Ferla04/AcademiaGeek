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

function comeIn(){
    login.style.display = 'flex';
    register.style.display = 'none';
}

function signIn(){
    login.style.display = 'none';
    register.style.display = 'flex';
}

function checkUser(){
    let correo = localStorage.getItem('Correo');
    let contraseña = localStorage.getItem('Contraseña');

    if( correo == lEmail.value && contraseña == lPassword.value){
        button.style.display = 'none';
        message.style.display = 'block';
        message.innerHTML = `Bienvenid@ ${localStorage.getItem('Nombre')}`;
    }else{
        button.style.display = 'block';
        message.style.display = 'none';
    }
}

