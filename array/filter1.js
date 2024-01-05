Array.prototype.filter2 =  (callback) => {
    const array = []
    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            array.push(this[i]) 
        }
    }
    return array
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const produtoFragil = p => p.fragil == true
const produtoCaro = p => p.preco > 500

console.log(produtos.filter(produtoFragil).filter(produtoCaro))