// Funçao que retorna o maior numero entre 2 numeros

function retornaMaior (x, y) {
    if (x > y){
        return console.log(`O maior numero é ${x}`)
    }else {
        return console.log(`O maior numero é ${y}`)
    }
}

let numero1 = 150;
let numero2 = 20

const resultado  = retornaMaior(numero1, numero2);
console.log(resultado);