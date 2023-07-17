const fabricantes = ['BMW', 'Mercedes', 'Volvo', 'Audio', 'Volskwagem']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

const notas = [3.8,7.8,6.8,5.9,4.9,7.9,8.9,10.0,5.0,6.9]

const notasBaixas = []

//sem callBack
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com calback
const notasBaixas2 = notas.filter((nota) => nota < 7)
console.log(notasBaixas2)