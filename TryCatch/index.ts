function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instancia de Date');
    }
    if (!data){
        data = new Date;
    }
    return data.toLocaleTimeString('pt-BR', {
       
    });
}
try{
    const dataTeste = new Date('2-10-1991 12:58:23')
    const hora = retornaHora(dataTeste);
    console.log(hora)
}catch(error){
    //tratar o erro
    console.log(error)
}finally{
    console.log('Segue executando o codigo')
}
