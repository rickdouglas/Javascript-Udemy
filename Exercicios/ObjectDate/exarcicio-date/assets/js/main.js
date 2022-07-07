const dataNow = document.querySelector('.container h2');
const horaNow = document.querySelector('.container h3');

const data = new Date();
const opcoes = {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
};
dataNow.innerHTML = data.toLocaleDateString(data.getUTCDate, opcoes);
horaNow.innerHTML = data.toLocaleTimeString('pt-BR')



// const dia = data.getDay().toString();
// const mes = data.getMonth().toString();
// const ano = data.getFullYear().toString();