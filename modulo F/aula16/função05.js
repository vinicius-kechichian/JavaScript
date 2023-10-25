    //RECURSIVIDADE//
    
function fatorial(n) { // função 
    if (n== 1) { 
        return 1
    } else {
        return n* fatorial(n-1) // calculo da função
    }
}

console.log(fatorial(5)) // resultado 