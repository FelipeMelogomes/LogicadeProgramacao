let a = "a";
let b = "b";
let h = "h";
let y = "y";


console.log(` b é maior que a: ${b > a}`);
console.log(` b é menor que a: ${b < a}`);
console.log(` h é menor que y: ${h < y}`);


let frase = "Lógica com JavaScript. Treine sua lógica";
let frase2 = "       Prática e repetição            "
let subfrase = frase.substring(0,6);
let subfrase2 = frase.substring(11);
let txt = frase.replace("Lógica", "Aprendendo");
let txt1 = frase.replace(/JAVASCRIPT/i, "Aprendendo com programação");
let txt2 = frase.replace(/Lógica/ig, "Programação");
let txt3 = frase2.trim();
let txt4 = frase2.trim().toUpperCase();
let txt5 = frase2.trim().toLowerCase();
console.log(txt1);
console.log(txt2);
console.log(txt);
console.log(txt4);
console.log(txt5);
console.log(subfrase);
console.log(subfrase2);
console.log(frase);
console.log(`Com espaços no início e no final :${frase2}`);
console.log(`Espaços removidos no início e no final :${txt3}`);


let mensagem = "Treinamento FullStack";
let email = "felipemelogomes@";
let buscaArroba = email.indexOf('@');
console.log(buscaArroba);

let nomeUser = email.substring(0, buscaArroba);
console.log(nomeUser);

let txt6 = txt3.concat(" - ",mensagem);
console.log(txt6);

let txt7 = mensagem.padStart(mensagem.length+3,"+");
console.log(txt7)

let numero = 5.

let txt8 = numero.toString().padEnd(4, '0')
console.log(txt8)

let alfa = "abcdefghijk";
console.log(alfa[3], alfa[5], mensagem[1])
