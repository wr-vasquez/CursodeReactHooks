console.log("Concatenacion de Strings")

const nombre = "Wilson";
const apellido = "Vasquez";

//usando template string para concatenar con el fin de usar codigo propio de javascript
const combreCompleto = `${nombre}  ${apellido} ${1 + 1}`;

console.log(combreCompleto);

function getSaludo(nombre){
    return 'Hola: ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`);