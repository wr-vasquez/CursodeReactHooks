console.log("Iniciando React Js Usando const y let")

const nombre = "Wilson";
const apellido = "Vasquez";
let valorDado = 15;
valorDado = 4;
console.log(nombre +" "+ apellido, valorDado);

//Scope local
if(true){
    let valorDado = 6;
    console.log("Scope local: "+valorDado);
}

//valor del scope global
console.log("Scope global: "+valorDado);