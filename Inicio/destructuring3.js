function random({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {min: 100, max: 999}

console.log(random(obj))