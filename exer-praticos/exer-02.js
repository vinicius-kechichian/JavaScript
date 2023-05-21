function calc() {
   var n1 = window.document.querySelector('input#n1');
   var res = window.document.querySelector('div#res')
   var n2 = window.document.querySelector('input#n2');
   //var cal = window.document.querySelector('input#calc')
   var cal = (n1 + n2) /2;
   res = cal;
   res.innerHTML = `<p>Sua media foi de ${cal}</p>`
   if (cal >= 6) {
    res.innerHTML = `<p>Parabéns, você foi aprovado</p>`;
   } else {
    res.innerHTML = `<p>Você foi reprovado</p>`
   }
}