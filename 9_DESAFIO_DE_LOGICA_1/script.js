let a1,a2,a3,a4,a5,a6,nome,total,pontuacao,sorteio
a1 = 3;
a2 = 4;
a3 = 2;
a4 = 2;
a5 = 1;
a6 = 5;
pontuacao = 5;
total = a1 + a2 + a3 + a4 + a5 + a6;

function media() {
    return (total / 6).toFixed(2)
}
function taxaDeAcerto() {
    return (media() / pontuacao) * 100
}

sorteio = parseInt(Math.random()* 6) + 1;
function sorteiaNome(n) {
    switch(n) {
        case 1:
            nome = "Felipe";
            break; 
        case 2:
            nome = "Clara";
            break; 
        case 3:
            nome = "Matheus";
            break; 
        case 4:
            nome = "Lucas";
            break; 
        case 5:
            nome = "Santos";
            break; 
        case 6:
            nome = "Flávia";
            break; 
    }
    return nome;
}
function statusAluno(nota, n) {
    switch(n) {
        case 1:
            nome = "Felipe";
            break; 
        case 2:
            nome = "Clara";
            break; 
        case 3:
            nome = "Matheus";
            break; 
        case 4:
            nome = "Lucas";
            break; 
        case 5:
            nome = "Santos";
            break; 
        case 6:
            nome = "Flávia";
            break; 
    }
    if(nota < 3) {
        console.log(`${nome} vai para Reforço!`)
    } else {
        console.log(`${nome} vai para Estágio!`)
    }
}
console.log(sorteio)

console.log(`A média das notas é: ${media()}`);
console.log(`A taxa de acerto é: ${taxaDeAcerto().toFixed(2)}%`);
console.log(`O Aluno escolhido é: ${sorteiaNome(sorteio)}`);
statusAluno(a1, 1)
statusAluno(a2, 2)
statusAluno(a3, 3)
statusAluno(a4, 4)
statusAluno(a5, 5)
statusAluno(a6, 6)