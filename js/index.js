//SELECCIONAR ELEMENTOS JS
let tituloUno = document.getElementById(`titulo-uno`);
let parrafos = document.getElementById(`parrafo`);
let tUno = document.querySelector(`#titulo-uno`);
let p = document.querySelector(`.parrafo`);

let cajaDiv = document.querySelector(`div`);

//MANEJADOR DE EVENTES CON FUNCIONES EXTERNAS
const mensaje =()=>{
    alert("Hola estás manejando eventos con una funcion externa");
    console.log(Event);
}

//MANEJADOR DE EVENTOS SEMANTICOS
const botonSemantico =  document.getElementById(`btn semantico`);
botonSemantico.ondblclick=()=>{
    alert("Ahora estás manejando eventos semánticos");
}

//ADD EVENT LISTENER - MANEJO DE EVENTOS MULTIPLES
const cajaUno = document.querySelector(`#caja-uno`);
cajaUno.addEventListener(`mouseover`, ()=>{
    cajaUno.style.borderColor="red";
});

cajaUno.addEventListener(`mouseout`, ()=>{
    cajaUno.style.borderColor="black";
});

const botonEnviar = document.querySelector(`#btn-enviar`);
botonEnviar.addEventListener(`mouseover`, ()=>{
    tituloUno.style.borderColor="blue";
});

// HANDLERS CON PARÁMETROS
const saludar = (nombre)=>{
    alert(`Hola, buenas noches ${nombre}`);
}

const botonParametro = document.getElementById(`btn-parametro`);
botonParametro.addEventListener(`click`, ()=>{
    saludar("Martin");
});