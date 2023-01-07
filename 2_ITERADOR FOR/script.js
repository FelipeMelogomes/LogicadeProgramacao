let nomes = ["Felipe", "Matheus", "Carlos", "Gilberto"];

nomes.forEach(function(e, i) {
    console.log(`Nome ${i+1} : ${e}`)
}) 

for(let i = 1; i < 4; i ++) {
    console.log(nomes[i]);
};


// inicializador; condição; iterador;
for(let i = 1; i <= 10; i ++) {
    console.log(i);
};