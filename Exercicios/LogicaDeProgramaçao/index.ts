// Funçao que retorna o maior numero entre 2 numeros

function retornaMaior (x, y) {
    return x > y ? console.log(`O numero maior é ${x}`) : console.log(`O numero maior é ${y}`);
}

let numero1 = 150;
let numero2 = 20

console.log(retornaMaior(numero1, numero2));