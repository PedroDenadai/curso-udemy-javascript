const gerarNumero = (min, max) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let counter = 0

while(opcao != -1){
    opcao = gerarNumero(-1000, 1000)
    console.log(opcao)
    counter++
}
console.log(`Quantidade de vezes que o While rodou ${counter}`)