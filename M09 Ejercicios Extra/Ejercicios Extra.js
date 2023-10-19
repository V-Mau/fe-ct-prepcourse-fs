/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  return Object.entries(objeto);
  //   return Object.keys(objeto).map((clave) => [clave, objeto[clave]]);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var miObj = {};

  string = string.split("").sort();

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[i - 1]) {
      miObj[string[i]] = 1;
    } else {
      miObj[string[i]] += 1;
    }
  }

  return miObj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var upperCase = "";
  var lowerCase = "";
  for (var i = 0; i < string.length; i++) {
    // console.log(string);

    if (string[i] === string[i].toUpperCase()) {
      upperCase += string[i];
    } else {
      lowerCase += string[i];
    }
    //  console.log('', upperCase);
    //  console.log('', lowerCase);
  }

  var resultado = upperCase + lowerCase;
  // console.log(resultado);
  return resultado;
}
// capToFront("soy HENRY");
// console.log(capToFront("soy HENRY"));

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var palabras = frase;
  // var array = [];

  // console.log(array);
  // console.log(palabras);

  return palabras
    .split(" ")
    .map((palabras) => palabras.split("").reverse().join(""))
    .join(" ");
}
// asAmirror("The Henry Challenge is close!")

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numCadena = numero.toString();
  // console.log(numCadena);
  var invertirNum = numCadena.split("").reverse().join("");
  // console.log(invertirNum);
  if (numCadena === invertirNum) return "Es capicua";
  else {
    return "No es capicua";
  }
}
// capicua(232);

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  
  var palabra = string;
  // console.log(palabra);
palabra = palabra.replace(/[abc]/g,''); 
// console.log(palabra);
if( palabra !== deleteAbc ) {
  // console.log(palabra);
  return palabra;

}

}
// deleteAbc('albhaca')

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  
    return arrayOfStrings.slice().sort(function(a, b) {
      return a.length - b.length;
    });
  
  
}
var strings = ["You", "are", "beautiful", "looking"];
var strimgsOrdenado = sortArray(strings);
console.log(strimgsOrdenado);

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  
  var newArray = [];
  for(var i = 0 ; i < array1.length; i++){
    
    for( var j = 0 ; j < array2.length; j++){
      
      if(array1[i] === array2[j]){
          newArray.push(array1[i]);
       } 
      
      }
    }
    return newArray;
  }
    


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
