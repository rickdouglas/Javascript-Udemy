function handleForm () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function eventReceiver(event){
        event.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`
    }

    form.addEventListener('submit', eventReceiver);
     
    
    // form.onsubmit = function(event){ *** Outra maneira de manipular o evento de submit do furmulario ***
    //     event.preventDefault();
    // };
}
handleForm();