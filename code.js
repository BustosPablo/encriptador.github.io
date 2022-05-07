const inputIngreso = document.querySelector("#ingreso");
const inputEgreso = document.querySelector("#egreso");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

function encriptar (){
    var mensaje = inputIngreso.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputEgreso.value = mensajeEncriptado;
    
    document.getElementById("muneco").style.display = "none";
    document.getElementById("leyenda").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar (){
    var mensajeEncriptado = inputIngreso.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    inputEgreso.value = mensaje;

    document.getElementById("muneco").style.display = "none";
    document.getElementById("leyenda").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var mensajeEncriptado = inputEgreso.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}


btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;

