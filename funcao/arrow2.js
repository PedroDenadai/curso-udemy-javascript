let compararThis = function (param)  {
    console.log(this === param)
}

compararThis(global)

const obj = {}
compararThis = compararThis.bind(obj)
compararThis(global)
compararThis(obj) 

let compararComThisArrow = param => console.log(this === param)

compararComThisArrow(global)
compararComThisArrow(module.exports)