
Array.prototype.forEachMeu = function(callback){ // o param callback é a funcao passada no forEachMeu
    for(let i = 0; i <= this.length; i++){
        callback(this[i], i, this) // chamando a funcao passando o valor do array, o indice e o array em si
    }
}




const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEachMeu((nome, indice) => {
    console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
