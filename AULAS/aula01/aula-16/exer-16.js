function parimpar(n) {
    if(n%2 == 0) {
        return 'Par'
    } else {
        return 'impar'
    }
}
console.log(parimpar(7))


console.log('---------------')
// EXEMPLOS DE PARAMETROS PRE DEFINIDOS //


function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(7))


console.log('-----------------')
// EXEMPLO DE VARIAVEL COM FUNÇÕES //

let Valor = function(x) {
    return x*2
}
console.log(Valor(30))

console.log('------------')
// Exemplo de fuction //
// exercio fatorial de 5 //

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))


console.log('--------------')
//Exemplo de fuction usando RECURSIVIDADE //

function FatoriaL(N) {
    if(N == 1) {
        return 1
    } else {
        return N * FatoriaL(N-1)
    }
}
console.log(FatoriaL(5))


// EXEMPLOS DE FUNÇÕES //
function media(nota) {
    if (nota >= 6) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}
