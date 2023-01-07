let d1,d2,sorteio1,sorteio2,mensagem,soma,acumulado
acumulado = 0;

function jogo() {
    sorteio1 = parseInt(Math.random() * 6) + 1;
    sorteio2 = parseInt(Math.random() * 6) + 1;
    d1 = sorteio1;
    d2 = sorteio2;
    soma = d1 + d2;
    soma % 2 == 0 ? mensagem = "Par" : mensagem = "ìmpar";
    mensagem == "Par" ? acumulado++ :null
    console.log( `${sorteio1} - ${sorteio2} :  ${d1+d2} : ${mensagem} - ${acumulado}`);
}

for(let i = 0; i < 6; i++) {
    jogo()
}


acumulado >= 4 ? mensagem = "Você ganhou!" : mensagem = "Não foi dessa vez :(";
console.log(mensagem)
