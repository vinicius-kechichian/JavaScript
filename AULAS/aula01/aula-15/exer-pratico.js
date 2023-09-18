let valores = [8, 5, 3, 9, 2, 7]

console.log(valores[0])

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

console.log('---------------')

let Var = [1, 6, 8, 2];
    for(let Pos in Var) {
        console.log(`A posção ${Pos} tem o valor ${Var[Pos]}`)
    }
let Pesq = Var.indexOf(6)
if (Pesq == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valores 8 esta na posição ${Pesq}`)
}
    