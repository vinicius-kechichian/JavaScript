function fatorial(n) { // função e varialvel 
    let fat = 1        // varialvel para contador 
    for(let c= n; c > 1; c--) { // funçionalidade 
        fat *= c // calculo
    }
    return fat //chamada de return
}

console.log(fatorial(5)) // resultado 