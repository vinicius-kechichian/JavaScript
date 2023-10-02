function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() /* data do dia */
   // var hora = data.getHours() /* hora do dia */ 
   var hora = 22
   msg.innerHTML = `Agora são ${hora} horas.` /* exibição da hora */

    if(hora >= 0 && hora < 12) { // Bom dia //
        img.src = 'imagens/manha.jpg' // imagens conforme a hr //
        document.body.style.background = '#e2cd9f' // fundo conforme a hr//
    } else if (hora >= 12 && hora <= 18) { // Boa tarde //
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else { // Boa noite //
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }

}