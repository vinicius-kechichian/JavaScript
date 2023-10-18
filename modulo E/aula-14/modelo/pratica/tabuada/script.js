function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        window.alert('por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = '' // limpar a tabuada 
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` // multiplicação
            item.value = `tab${c}`
            tab.appendChild(item)
            c++ // contador 
        }
    }


}