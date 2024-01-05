const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const acharPreco = o => o.preco

const resultado = carrinho.map((e) => JSON.parse(e)).map((l) => l.preco)
const resultado2 = carrinho.map(paraObjeto).map(acharPreco)

console.log(resultado)
console.log(resultado2) 