console.log('Usando Objetos literales o diccionarios')

const persona = {
    nombre: 'Wilson',
    apellido: 'Vasquez',
    edad: 27,
    direccion:{
        ciudad: 'Guatemala',
        zip:5569665633,
        long:142666,
    }

};

//Hacer un clon o copia de persona
const persona2 = {...persona}

console.table(persona);
console.log(persona2);