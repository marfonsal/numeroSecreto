//-Define una variable titlo, selecciona a traves del DOM la etiqueta H1

//let titulo = document.querySelector ('h1');
//el innerHTML es una propiedad Js que permite obtener o establecer contenido HTML de un elemento, h1 en este caso.
//titulo.innerHTML = "Juego del Número Secreto"

//-Practicamente lo mismo que en el caso anterior, pero este selecciona el elemento p.

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Escoge un número del 1 al 10'


//Se ha declarado una funcion con dos parámetros,  elemento y texto. Estos parámetros definen el comportamiento de la función.

let numeroSecreto = 0; //Genera una variable haciendo uno de la funcion generarNumeroSecreto, en otra iteracion, se asigno el valor a 0
let intentos = 0; //Genera una variable como contador de intentos, en otra iteracion, se asigno el valor a 0
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto); //Muestra el numero secreto en la consola

function asignarTextoElemento(elemento, texto) {
//Se declara una variable llamada elementoHTML que utiliza el DOM document querySelector para seleccionar el primer elemento que coincida 
    let elementoHTML = document.querySelector (elemento);
//El contenido HTML seleccionado se establece en el valor texto
    elementoHTML.innerHTML = texto;
    return;
}

//Se crea una funcion con nombre verificarIntento para declarar una variable como numeroDeUsuario que selecciona el id valorUsuario en el HTML
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    console.log(numeroDeUsuario === numeroSecreto); //Arroja en la consola si el valor es igual al numero secreto.

    console.log(intentos); //Muestra la cantidad de intentos en esta interaccion

    if (numeroDeUsuario === numeroSecreto){ // Inicia la comparacion exacta entre ambos numeros
        asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}!`); //De ser correcta, la funcion asignarTextoElemento modifca la etiqueta p con el valor declarado
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else { //De lo contrario continuamos con la siguente comparacion
            if (numeroDeUsuario > numeroSecreto){ // Si el numero de usuario es mayor
                asignarTextoElemento('p','El número secreto es menor');//Modificara el texto mediante esta funcion para darle la pista
           }else//De lo contrario, la ultima comparacion
                if (numeroDeUsuario < numeroSecreto){//El numero que ingreso el usuario es menor
                    asignarTextoElemento('p','El número secreto es mayor')//Arrojara la pista que le sugiere que el numero secreto es mayor
                }
                intentos++;
                limpiarCaja();
    }
    return; //Retorna la funcion
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

//Esta funcion genera un numero al pseodoaleatorio entre el 1 al 10

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
    //Si ya fueron sorteados todos los numero
    
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    } else {
    
    //Si el numero generado esta incluido en la lista,continuamos, de lo contrario, ejecutamos otra accion
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();

            } else {
                listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
        }
    }
}

function condicionesIniciales() {

    asignarTextoElemento('h1','Juego del Numero Secreto');
    asignarTextoElemento('p',`Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio
    condicionesIniciales();
    //Generar numero aleatorio
    //Iniciar el numero de intentos
    //Deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

