        /*....Exemplos....*/
// para acresentar mais uma variavel: [3] = 6
// outro metedodo: push(7)
// para saber comprimento do array: .length
// para colocar em ordem cresente: .sort()

let num = [5,8,2,9,3]
console.log(`Nosso vetor tem ${num.length} posições`)
console.log('------------------')


let nu = [8,2,9,3]
console.log(`O primeiro valor do vetor é ${nu[0]}`)
console.log('----------------')


let Num = [5,8,2,9,3]
Num.sort() //deixa em ordem crescente
console.log(Num)
console.log('---------------')


let Nu = [5,8,2,9,3]
Nu.push(1) //Adiciona mais uma elemento
Nu.sort() // deixa em ordem crescente 
console.log(`A posição do vetor é: ${Nu}`)
console.log('-----------------')


/* como achar o valor e sua posição
   exemplo a seguir */

let Var = [8,1,7,4,2,9]
Var.sort() //deixa em ordem crescente
console.log(Var)
let pos = Var.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
console.log(`O valor está na posição ${pos}`)
}


