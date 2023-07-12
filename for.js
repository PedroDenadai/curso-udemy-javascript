let count = 0
while(count <= 10){
    console.log(`contador = ${count}`)
    count++
}

for(let i = 0; i <= 10; i++){
    console.log(`i = ${i}`)
}


const notas = [45.,6.9,6.9,9.8,6.3,1.9,10.0,9.8,7.9]

for (let nota in notas){
    console.log(nota, notas[nota])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Beatriz',
    peso: 45,
    altura: 1.54
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}