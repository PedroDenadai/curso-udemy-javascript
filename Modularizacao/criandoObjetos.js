const obj1 = new Object();
console.log(typeof obj1)

function Pessoa(nome, nascimento, apelido){
    this.nome = nome;
    this.nascimento = nascimento;
    this.apelido = apelido;
}

const pessoa1 = new Pessoa("Pedro", "28/06/2005", "Pedrinho")

console.log(pessoa1);