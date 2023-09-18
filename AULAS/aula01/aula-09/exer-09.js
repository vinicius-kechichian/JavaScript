var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[0]
window.document.write(p1.innerText)

p1.style.color = 'violet';
corpo.style.background = 'black';

var d = window.document.getElementById('test');
d.style.background = 'white';
d.style.color = 'black';
d.innerText = 'Testando DOM por ID';

var seleC = window.document.querySelector('div.teste');
seleC.style.color = 'yellow';