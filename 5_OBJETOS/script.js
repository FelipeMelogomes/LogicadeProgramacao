let imovel = {
    tipo: ["Casa", "Apartamento"], // membro do objeto;
    construtora: ["Geral do Bairro"],
    seguradora: ["Seguros e Cia"],
    slogan: function(t) {
        console.log(`Venha conhecer ${this.tipo[t]}. Pronta entrega`)
    },
    beneficios: {
        administracao: "Imobiliária",
        seguroResidência: true,
        localização: "Bairro Nobre"
    }
}
console.log("Nossas opções")
imovel.tipo.forEach(function (v, i) {
    console.log(`Opção ${i+1} -  ${v}`)
})
console.log(typeof(imovel));
console.log(imovel.constructor);
console.log(imovel);
console.log(imovel);
imovel.slogan(1);
if (imovel.beneficios.seguroResidência) {
    console.log("Este imóvel possui seguro residência e se localiza em " + imovel.beneficios.localização)
}