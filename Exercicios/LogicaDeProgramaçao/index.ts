/**Escreva uma funçao que recebe um numero e retorne os seguintes dados:
 * Divisivel por 3 = Fizz
 * Divisivel por 3 e por 5 = Buzz
 * Divisivel por 3 e por 5 = FizzBuzz
 * Nao é divisivel por 3 nem por 5 = Retorne o proprio numero
 * Checar se o valor inserido é realmente um numero
 * Use numeros de 0 a 100
 */

const mod3 = 'Fizz';
const mod5 = 'Buzz';

const modNumber = (x) => {
    while(!isNaN(x)){
        if(x % 3 === 0 && x % 5 === 0)
            return mod3 + mod5;
        else if(x % 5 === 0)
            return mod5;
        else if (x % 3 === 0)
            return mod3;
        else return x;
    }    
}
for (let i = 0 ; i <= 50 ; i++){
    console.log(i, modNumber(i));
}