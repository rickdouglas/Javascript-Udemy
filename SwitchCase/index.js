const data = new Date();
let diaSemanda = data.getDay();
let nomeDoDia;

switch(diaSemanda){
    case 0:
        nomeDoDia = 'Domingo'
    break;
    case 1:
        nomeDoDia = 'Segunda Feira'
    break;
    case 2:
        nomeDoDia = 'Terça Feira'
    break;
    case 3:
        nomeDoDia = 'Quarta Feira'
    break;
    case 4:
        nomeDoDia = 'Quinta Feira'
    break;
    case 5:
        nomeDoDia = 'Sexta Feira'
    break;
    case 6:
        nomeDoDia = 'Sábado'
    break;
    default:
        'Dia da semana inválido !'
    break;    
}