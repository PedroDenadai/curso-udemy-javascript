
Array.prototype.map2 = function (callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const nums = [1,2,3,4,5,6,7,8]

let result = nums.map2(e => {
    return e * 3
})

console.log(nums)
console.log(result)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map2(soma10).map2(triplo).map2(paraDinheiro)
console.log(resultado)