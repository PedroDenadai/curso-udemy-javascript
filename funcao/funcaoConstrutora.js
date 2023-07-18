function Carro(velocidadeMax = 200, delta =  5){
    //atributo privado
    let velocidadeAtual = 0


    //funcao / metodo publico
    this.acelerar = () => {
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMax
        }
    }

    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
} 


const uninho = new Carro(300, 10)

uninho.acelerar()

console.log(uninho.getVelocidadeAtual())