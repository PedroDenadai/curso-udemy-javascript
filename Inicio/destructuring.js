const pessoa = {
    nome: 'Pedro',
    idade: 18,
    endereco: {
        logradouro: 'Rua Professor belmiro siqueira',
        numero: 1000
    }
}

const {nome: n, idade} = pessoa

console.log(n, idade)