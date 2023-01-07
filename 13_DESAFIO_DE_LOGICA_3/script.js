let numDaSorte, mensagem, acumula
acumula = 0;

function sorteio() {
    numDaSorte = parseInt(Math.random() * 100) + 1;
    return numDaSorte;
}

sorteio();


function palpite(n) {
    if(acumula == 6) {
        mensagem = "Tentativas esgotadas!"
    } else {
    if(numDaSorte > n) {
        mensagem = "Tente um número maior!"
    } else if (numDaSorte < n) {
        mensagem = "Tente um número menor!"
    } else if (numDaSorte == n){
        mensagem = "Você ganhou!"
    } else {
        mensagem = "Não foi dessa vez :("
    }
}
    acumula++;
    return mensagem;
}