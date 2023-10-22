let valores = [8,1,7,4,2,9]
for(let pos=0; pos < valores.length; pos++) { // mostra todas as posições e valor do vetor
console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}
console.log('---------------')

/* Outro metodo de fazer o exercicio anterior
 mais simplificado */

let Valor = [8,1,7,4,2,9]
Valor.sort()
for(let Pos in Valor) { //metododo simplificado 
    console.log(`A posição ${Pos} tem o valor ${Valor[Pos]}`)
}