function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa = criaPessoa('Rick', 'Douglas', 30);

console.log(pessoa.nome);
console.log(pessoa);