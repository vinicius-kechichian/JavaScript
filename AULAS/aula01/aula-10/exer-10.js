var a = window.document.getElementById('area')
a.addEventListener('click',clicar);
a.addEventListener('mouseenter',entrar);
a.addEventListener('mouseout',sair);

function clicar() {
   a.innerText = 'Clicou';
   a.style.background = 'yellow'
}
function entrar() {
    a.innerText = 'clique aqui';
}
function sair(){
    a.innerText = 'Saiu!'
    a.style.background = 'cadetblue';
}