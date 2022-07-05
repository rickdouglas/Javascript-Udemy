const alunos = ['Rick', 'Douglas', 'Miranda'];

alunos.push('Teste'); // add o elemento no fim do vetor
alunos.unshift('Erika') // add o elemento o comeco do array
const teste = alunos.pop() // remove o ultimo elemento do array e salva em uma const

console.log(teste);
console.log(alunos);
console.log(alunos.slice(0,3));
