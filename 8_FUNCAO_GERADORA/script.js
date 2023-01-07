function * ex01(num) {
    yield num
    yield num + 10;
}


let teste = ex01(5);


console.log(teste.next().value)



function * idIncremento() {
    let index = 0
    while(true)
    yield index ++
}


let indexIncremento = idIncremento();

console.log(indexIncremento.next().value);
console.log("***************")

function * geradorExterno(num) {
    yield num + 1
    yield num + 2
    yield num + 3
}


function * geradorPrincipal(num) {
    yield num 
    yield * geradorExterno(num)
    yield num * 2
}


let ger = geradorPrincipal(5)
console.log(ger.next().value);
console.log(ger.next().value);
console.log(ger.next().value);