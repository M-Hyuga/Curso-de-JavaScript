var agora = new Date()
var diaSem = agora.getDay()
/*
    0=Domingo
    1=Segunda
    2=Terça
    3=Quarta
    4=Quinta
    5=Sexta
    6=Sábado
*/

console.log(diaSem)

switch(diaSem){
    case 0:
        console.log("Bom domingo para você!")
        break
    case 1:
        console.log("Boa segunda para você!")
        break
    case 2:
        console.log("Boa terça para você!")
        break
    case 3:
        console.log("Boa quarta para você!")
        break
    case 4:
        console.log("Boa quinta para você!")
        break
    case 5:
        console.log("Boa sexta para você!")
        break
    case 6:
        console.log("Bom sabádo para você")
    default:
        console.log("ERRO Dia inválido!")
        break
}