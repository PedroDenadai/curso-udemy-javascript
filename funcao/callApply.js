function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

function Produto(nome, preco, desc){
    this.nome = nome
    this.preco = preco
    this.desc = desc
    this.getPreco = getPreco
}

const p1 = new Produto('NoteBook', 2500, 0.2)

console.log(p1.getPreco())
console.log(2500 * 0.8)

const carro = {preco: 300000, desc: 0.05}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.7, '$E'))
console.log(getPreco.apply(carro, [0.7, '$E']))