function Pessoa(nome){
    this.nome = nome
    
    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Pedro')

pessoa1.falar()