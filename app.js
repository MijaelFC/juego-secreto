//Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//Funciones

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearón todos los numeros posibles');
    }else{
        //Si el numero esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            console.log(numeroGenerado);
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Selecciona un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');  
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = "";
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //condiciones iniciales
    condicionesIniciales()
    //desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}


condicionesIniciales();

