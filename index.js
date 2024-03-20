let botonCopiar= document.getElementById("btn-copiar");
let sinResultado= document.getElementById("sin-resultado");
let textoEncriptar= document.getElementById("t-encriptar");
let textodesencriptar= document.getElementById("t-desencriptar");

function encriptar(){
    botonCopiar.style.visibility ="visible"
    textodesencriptar.style.visibility ="visible"
    sinResultado.style.display = "none";
    let encriptacion = textoEncriptar.value.replace(/e/g, "enter").replace(/i/g, "ines").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    textodesencriptar.value=encriptacion;
}

function desencriptar(){    
    botonCopiar.style.visibility = "visible"; 
    sinResultado.style.display = "none";
    textodesencriptar.style.visibility ="visible"
    let desencriptacion = textoEncriptar.value.replace(/enter/g, "e").replace(/ines/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    textodesencriptar.value=desencriptacion;
}

function copiar(){
    textodesencriptar.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copiado");
}