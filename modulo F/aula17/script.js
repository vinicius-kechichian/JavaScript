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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.valores} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}