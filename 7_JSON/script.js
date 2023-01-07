let info = '{"produto":"spaghetti","preco": 30}'

console.log(typeof(info));
let infoJson = JSON.parse(info);
console.log(typeof(infoJson));
console.log(infoJson.produto);


let indices = '[1,4,8,12]'; // string
let novosIndices = JSON.parse(indices);

console.log(typeof(indices));
console.log(typeof(novosIndices));


let empresa = {nome: "Ex tecnologia", fundacao: 1970, filial: 2, regiao: "Centro Oeste"};
let infoEmpresa = JSON.stringify(empresa,['fundacao','filial']);

console.log(infoEmpresa);

let pratos = {p1:"Massas" , p2:"Carnes"};

console.log(JSON.stringify(pratos));