function soma(){
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}


const array = []

for(let j = 0; j <=100; j++){
    array[j] = j
}


console.log(soma(1, 2, 3, 4))


function somaX(array){
    let soma = 0
    for (let i in array){
        soma += array[i]
    }
    return soma
}

console.log(somaX(array))



