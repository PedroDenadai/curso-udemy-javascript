

    //for(let i = 0; i< 10; i++){
     //   console.log(i)
    //}
    //console.log('i = ' + i)





//for(var i = 0; i < 10; i++){
//    console.log(i);
//}

const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(
        function (){
            console.log(i)
        }
    )
}

funcs[2]()