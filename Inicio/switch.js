const imprimirResultado = (nota) => {
    switch (Math.floor(nota)){
        case 10: //Se for 10 pule para o nove e executa oq tiver no 9 
        case 9:
            console.log('Parabens')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
}