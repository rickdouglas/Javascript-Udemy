const numbers = [ [1,2,3], [4,5,6], [7,8,9] ];
const [lista1,  [,,num], ...resto] = numbers;
console.log(lista1);
console.log(resto);
console.log(num);