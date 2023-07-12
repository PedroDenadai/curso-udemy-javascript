const nums = []
for(let i = 0; i<=50; i++){
    nums[i]= i
}

for (let j in nums){
    if (j == 15) break
    console.log(`${j} = ${nums[j]}`)
}

for (let k in nums){
    if (k == 20) continue //pula o numero 20 e continua
    console.log(`${k} = ${nums[k]}`)
}

externo: for(a in nums){
    for(b in nums){
        if (a == 10 && b == 9) break externo
        console.log(`Par Ordenado x = ${a} , y = ${b}`)
    }
}