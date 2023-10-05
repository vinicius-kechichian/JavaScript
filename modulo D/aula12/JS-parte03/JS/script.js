function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var forAno = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');
    if (forAno.value.length == 0 || Number (forAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (forAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.style.height = '200px'
                img.style.border = '50%'
                img.setAttribute('src','img/criança-h.jpg')
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            //criança
        } else if (idade < 21) {
            //jovem
        } else if (idade < 50) {
            //adulta
        } else {
            //idosa
        }
    }
    res.style.textAlign = 'center' 
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }
}   