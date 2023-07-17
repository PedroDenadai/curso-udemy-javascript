const soma = (a, b) => a + b

const imprimir = (a, b, operacao = soma) => {
    console.log(operacao(a, b))
}

imprimir(4, 8)