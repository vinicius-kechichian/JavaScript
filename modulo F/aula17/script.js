let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document;querySelector('div#res')
let valores = []

function inNum(n) {
if(Number(n) >= 1 && Number(n) <= 100) {
    return true 
} else {
    return false 
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(inNum(num.value) && ! inlista(num.value, valores)) {
        window.alert('tudo ok')
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}