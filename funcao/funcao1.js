const array = [function (a, b) {return a + b}, function (){return 'Oppaa'}]

console.log(array[0](4, 6))

const obj = {}
obj.falar = () => {return 'Opa'}
console.log(obj.falar())


//funcao como parametro
function foo(bar){
    bar()
}

foo(function () {console.log('XXX')})

function soma(a,b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(9)