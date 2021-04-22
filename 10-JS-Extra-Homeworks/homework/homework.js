// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //return Object.entries(objeto);
  //Object.values(Obj), Object.keys(Obj); -> Array
  let arr = [];

  for (let i = 0; i < Object.keys(objeto).length; i++) {
    arr.push([Object.keys(objeto)[i], Object.values(objeto)[i]])
    
  }
  return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
let obj = {};

string.split('').forEach(s => !obj[s] ? obj[s] = 1 : obj[s]++);

return obj;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  let strUpr = '', strLwr = s;


  for (let str of s) {
    if (str === str.toUpperCase() && str !== str.toLowerCase()) {
      strUpr = strUpr + str;
      strLwr = strLwr.replace(str, '');
    }
  }
  return `${strUpr + strLwr}`;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  let arr = [];

  str.split(' ').forEach(val => {let wrd = ''; for (let s of val) {wrd = s + wrd;} arr.push(wrd)});

  return arr.join(' ');
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  let arr = numero.toString().split('');

  return (arr.toString() === arr.reverse().toString()) ? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //(s === 'a' || s === 'b' | s ==='c') ? false : true
  //let arr = ['a', 'b', 'c'] //  
   return cadena.split('').filter(s => !['a', 'b', 'c'].includes(s)).join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  // if (arr.length === 1) {return arr[0];} else {return ()}
  // (array.length === 0) array.slice(1) arr.slice([inicio [, fin]])

  //["You", "are", "beautiful", "looking", "loooonggggg", "short"]
  return arr.sort((a, b) => a.length - b.length);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  let arr = [];

  for (const item of arreglo2) {
    if (arreglo1.includes(item)){
      arr.push(item)
    }
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

