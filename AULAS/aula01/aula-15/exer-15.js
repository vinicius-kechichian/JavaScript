let num = [5,8,3,6,7]
num.sort()
// num.sort, coloca o vetor em ordem 
console.log(num)

console.log(`o vetor tem ${num.length} posiçoes`)
// .length, mostra quantos vetor tem

console.log(`Monstrando valor em vetor,
 o primeiro valor é ${num[0]}`)
// [0] mostra o primeiro valor do vetor

for(let pos=0; pos<num.length;pos++){
    console.log(num[pos])
}