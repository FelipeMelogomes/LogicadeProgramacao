let animais, regiao, especies
especies = " "

animais = [
    ["Alasca", "Baleia Jubarte", "Foca", "Lontra"],
    ["Deserto do Saara", "Escorpião", "Dromedário", "Lagarto"],
    ["China", "Panda", "Faisão Dourado", "Urso Asiático"]
]


for (var i = 0; i < animais.length; i++) {
    if(animais [i][0] == "Deserto do Saara") {
        regiao = animais[i][0]
            for(let n = 1; n < animais[i].length; n++) {
            especies += `${animais [i] [n]} - `

        }
    }
}

console.log(`Região: ${regiao} - espécies: ${especies}`)