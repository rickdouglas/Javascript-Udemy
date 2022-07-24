// Funçao que retorna o maior numero entre 2 numeros
// Funcçao que retorna se uma imagem esta no modo paisagem

const maxNumber = (x, y) => x > y ? console.log(`O numero maior é ${x}`) : console.log(`O numero maior é ${y}`);
console.log(maxNumber(130, 250));

const ePaisagem = (width, height) => width > height ? console.log(`A imagem está no modo paisagem`) : console.log(`A imagem está no modo retrato`);
console.log(ePaisagem(1920, 1080))