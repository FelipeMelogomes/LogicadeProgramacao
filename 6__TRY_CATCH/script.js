let professor = '{nome: "Felipe Melo", "dataNascimento:"1900}';

try{
    let docent = JSON.parse(professor)
} catch(err){
    console.log("Erro na composição do JSON");
}



let a = 25;
try{
    if (typeof(a) !== "number") throw "Isso não parece um número !";
    if (a > 20) throw "Este número está acima do padrão";
}catch(err) {
    console.log(err)
}


function controlException() {
    this.msg = msg
    this.info = "Validação :"
};


function mesAtual(m) {
    m = m - 1;
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", 
    "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    if (meses[m] !== undefined) {
        return meses[m]
    } else {
        throw new controlException("Verificando entrada de dados")
    }
}


let mes = 3
let nameMes 


try {
    nameMes = mesAtual(mes)
} catch (err) {
    nameMes = "Mês inexistente"
    console.log(err.info,err.msg)
}

console.log(nameMes)