const notas = [9.0, 4.8, 2.9, 8.9, 10.0]

console.log(notas[0], notas[4])

console.log(notas[400])

notas[400] = 9.8
console.log(notas)

console.log(notas.pop())
notas.push('teste', null, {nome: 'pedro'}, 900)
console.log(notas)
console.log(typeof notas[401])