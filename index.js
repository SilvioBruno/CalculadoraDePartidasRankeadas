const prompt = require('prompt-sync')();

    var vitorias = parseInt(prompt("Digite o número de Vitórias"))
    var derrotas = parseInt(prompt("Digite o número de Derrotas"))

let resultado = calcular(vitorias, derrotas);
calcular(vitorias, derrotas)
definitionElo(resultado)



function calcular(vitorias, derrotas) {
    return vitorias - derrotas;
}




function definitionElo(resultado){
    if(resultado<10){
        Level = "Ferro"
        console.log(Level)
    }
}




