var velocidade = Number(320)
const taxa = Number(0.42)
var multa = velocidade * taxa
console.log(`Sua velocidade é de ${velocidade}Km/h`)
 if(velocidade > 60){
    console.log(`Você está acima da velocidade da via. Foi MULTADO no valor de R$ ${multa}.`)
 }
