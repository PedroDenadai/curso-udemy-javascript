const [a] = [10]

console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 9, 8, 5]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 9] , [9, 6, 5]]
console.log(nota)