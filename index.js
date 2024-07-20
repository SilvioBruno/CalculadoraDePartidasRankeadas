const prompt = require('prompt-sync')();

    var vitorias = parseInt(prompt("Digite o número de Vitórias"))
    var derrotas = parseInt(prompt("Digite o número de Derrotas"))

let resultado = calcular(vitorias, derrotas);





function calcular(vitorias, derrotas) {
    return vitorias - derrotas;
}




function definitionElo(resultado){
    if(resultado<=10){
        Level = "Ferro"
    }
    else if(resultado>10 && resultado<=20){
        Level = "Bronze"
    }
    else if(resultado>20 && resultado<=50) {
        Level = "Prata"
    }
    else if(resultado>50 && resultado<=80){
        Level = "Ouro"
    }
    else if(resultado>80 && resultado<=90){
        Level = "Diamante"
    }
    else if(resultado>90 && resultado<=100){
        Level = "Lendário"
    }
    else{
        Level = "Imortal"
    }

}

function imprimirResultado(){
    console.log("O Heroí tem saldo de "+resultado+" está no nível de "+Level)
}

calcular(vitorias, derrotas)
definitionElo(resultado)
imprimirResultado()

