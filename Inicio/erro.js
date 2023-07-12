function erroLancar(erro){
    throw new Error('...')
}



function imprimir(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        erroLancar(e)
    } finally{
        console.log('Finall')
    }
}

const obj = {
    nome: 'Pedro', 
    name: 'Pedro2'
}

imprimir(obj)