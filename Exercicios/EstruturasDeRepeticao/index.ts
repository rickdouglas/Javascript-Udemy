const elementos = [
    {tag: 'p', texto: 'Teste p'},
    {tag: 'div', texto: 'Teste div'},
    {tag: 'section', texto: 'Teste section'},
    {tag: 'footer', texto: 'Teste footer'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i=0 ; i< elementos.length; i++){
    const {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    const textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    //tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
container?.appendChild(div);