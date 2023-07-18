const valor = 'Global'

function foo(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    foo()
}

exec()