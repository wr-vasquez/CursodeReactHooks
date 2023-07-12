//Arreglos en JS

const arreglo = [1,2,3,4];
// No se recomienda usar push para pasarle datos a un arreglo ya que modifica el objeto principal
// arreglo.push(1) 
// arreglo.push(2)
// arreglo.push(3)

//Aqui usamos el operador spread de javascript para hacer una copia y agregar un elemento
let arreglo2 = [...arreglo, 5]; 
//arreglo2.push(5);

const arregglo3 = arreglo2.map(function(numero) {
    return numero * 2; //Multiplicamos los valores del arreglo

})
console.log(arreglo);
console.log(arreglo2);
console.log(arregglo3)