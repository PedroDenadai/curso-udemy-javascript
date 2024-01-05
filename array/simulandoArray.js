const quaseArray = {0: 'Pedro', 1: 'Massa', 2: 'Raikkonen'}

Object.defineProperty(quaseArray, 'toString', {
    value: function() {
        return Object.values(this)
    },
    enumerable: false
})

console.log(quaseArray.toString())