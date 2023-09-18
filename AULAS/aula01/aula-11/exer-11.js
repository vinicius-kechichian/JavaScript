function calcular(){
    var velo = window.document.querySelector('input#velo');//texto de exibiçao
    var res = window.document.querySelector('div#resultado')
    var cal = Number(velo.value);
        res.innerHTML = `<p>A sua velocidade é ${cal} km/h</p>`;
    if (cal >= 60) {
        res.innerHTML += `<p> Vocé esta sendo multado`;
    }
        res.innerHTML += `Diriga com segurança!`;
}

    
    