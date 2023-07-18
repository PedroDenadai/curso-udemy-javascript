function criarPessoa(nome, idade, sexo){
    return {
        nome,
        idade,
        sexo: sexo
    }
}

console.log(criarPessoa('Pedro', 18, 'M'))