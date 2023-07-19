const triangulo = (a, b, c) => {
    if(a == b && b == c){
        console.log('Equilátero')
    } else if(a == b || b == c || c == a){
        console.log('Isóceles')
    } else if(a != b != c){
        console.log('Escaleno')
    }
}

triangulo(2,2,2)

const elevada = (b, e) => {
    console.log(Math.pow(b, e))
}

elevada(2, 10)