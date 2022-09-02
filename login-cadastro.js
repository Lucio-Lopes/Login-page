const btn = document.getElementsByClassName('button');
let userName = document.getElementById('usuario');
let passWord = document.getElementById('senha');
let passWord2 = document.getElementById('senha2');
const user1 = document.getElementById('usuario-login');
const pass1 = document.getElementById('senha-login');
const openBtn = document.querySelector('.menu');
const nav = document.querySelector('#sidemenu');
const id = [
    'lucio',
    'fernando'
]
const password = [
    '123',
    '456'
]
function entrar(){
    const found = id.indexOf(user1.value);
    const found2 = password.indexOf(pass1.value);
    if(found == -1 || found2 == -1){
        const erro = document.getElementById('res');
        erro.classList = "error";
        erro.innerHTML = "Usuário ou senha incorretos!";
        setTimeout(() =>{
            erro.innerHTML = "";
            erro.classList = "";
        },3000);
        pass1.value = "";
    }
    else{
        if(pass1.value == password[found]){
            const correct = document.getElementById("res");
            correct.classList = "correct";
            correct.innerHTML = "Logado com sucesso!";
            setTimeout(() =>{
                correct.innerHTML = "";
                correct.classList = "";
            },3000);
            user1.value = "";
            pass1.value = "";
        }
        else{
            const erro = document.getElementById('res');
            erro.classList = "error";
            erro.innerHTML = "Usuário ou senha incorretos!";
            setTimeout(() =>{
                erro.innerHTML = "";
                erro.classList = "";
            },3000);
            pass1.value = "";
        }
    }   
}
function autenticar(){
    let userValue = userName.value;
    let userPass = passWord.value;
    let userPass2 = passWord2.value;
    const found = id.indexOf(userValue);
    if(userName.value == "" || passWord.value == "" || passWord2.value == ""){
        alert("Preencha os campos")
    }
    else{
        if(userPass != userPass2){
            alert("As senhas sao diferentes")
        }
        else{
            if(found != -1){
                alert("Usuário já existe!")
            }
            else{
                if(userPass === userPass2){
                    id.push(userValue);
                    password.push(userPass);
                    userName.value = "";
                    passWord.value = "";
                    passWord2.value = "";
                    console.log(id);
                    console.log(password);
                }   
            }
        }
    }
}


function toggleMenu(){
	nav.classList.toggle('active');
}

openBtn.addEventListener('click',toggleMenu);