function contar() {
    let ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo  = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
          // CONTAGEM CRESCENTE  
          for(let c = i; c <= f; c += p) {
             res.innerHTML += `${c} \u{1F449}` // emoji
            }
        } else {
            // CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}` // emoji
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    }
}
