const num = Number(prompt('Digite um numero'));
const numTitulo = document.getElementById('titulo'); // passa-se uma string com o id do elemento a ser selecionado
const texto = document.getElementById('texto');

numTitulo.innerHTML = num;
texto.innerHTML += `<p>A raiz quadrada desse numero é: ${num ** 0.5 }</p>`
texto.innerHTML += `<p>${num} é um numero inteiro? = ${Number.isInteger(num)}</p>`
texto.innerHTML += `<p>É um NaN? = ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p>O valor arredondado pra baixo é = ${Math.floor(num)}</p>`
texto.innerHTML += `<p>O valor arredondado pra cima é = ${Math.ceil(num)}</p>`
texto.innerHTML = `<p>Valor com duas casas decimais = ${num.toFixed(2)}</p>`