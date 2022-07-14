const pessoa = {
    nome : 'Rick Douglas',
    sobrenome: 'Miranda',
    idade: 30,
    endereco : {
        rua: 'Av JK',
        numero: 333
    }
};
const {nome, sobrenome, ...resto} = pessoa;
const {endereco: {rua, numero}} = pessoa;
console.log(nome, sobrenome, resto);
console.log(rua, numero);