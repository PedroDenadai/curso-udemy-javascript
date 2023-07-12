const pessoa = {
    nome: 'Pedro',
    falar() {
        console.log(this.nome)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const pessoaFalar = pessoa.falar.bind(pessoa)

pessoaFalar()