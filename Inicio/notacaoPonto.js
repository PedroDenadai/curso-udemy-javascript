console.log(Math.ceil(7.1))
const obj1 = {}
obj1.nome = 'Pedro'
console.log(obj1.nome)


function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Pedro')

console.log(obj2.nome)