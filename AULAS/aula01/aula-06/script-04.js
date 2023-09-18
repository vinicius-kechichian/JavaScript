var nome = window.prompt('Qual o seu nome?');
document.write(`Olá,${nome}. seu nome tem ${nome.length} letras<br/>`);
document.write(`Seu nome maiúsculas é ${nome.toUpperCase()}</br>`);
document.write(`Seu nome em minusculo ${nome.toLowerCase()}`);

//------------------------------------------------//
var num = 1545.5
//num.toFixed(2);
//num.toFixed(2).replace('.',',');

num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
console.log(num); // converte os numeros para dinheiro

