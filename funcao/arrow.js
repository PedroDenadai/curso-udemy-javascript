let dobro = (a) => {
    return a * 2
}

console.log(dobro(Math.PI))

dobro = a => a * 2


let ola = () => 'Ola'

console.log(ola())

ola = _ => 'Ola'

console.log(ola())

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa()