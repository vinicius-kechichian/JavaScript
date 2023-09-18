

function calcular(){
    var txvel = window.document.querySelector('input#txtvel');
    var res = window.document.querySelector('div#res');
    var vel = Number(txvel.value);
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}Km/h</p>`;
        if(vel >= 60) {
            res.innerHTML += `<p>Voçê esta sendo multado por excesso de velocidade</P>`
        }
    res.innerHTML += `<p>Diriga sempre com cinto de segurança!</p>`
}
