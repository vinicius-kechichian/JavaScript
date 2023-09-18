var hora = 21;
console.log(`São exatamente ${hora} horas!`);
if(hora < 12) {
    console.log('Bom dia');
} else if(hora <= 18) {
console.log('Boa tarde')
} else {
    console.log('Boa Noite');
}
console.log('_ _ _ _ _ _ _ _');

/* ----------------------- */

var id = 35;
console.log(`Sua idade é ${id} anos!`);
if( id >= 18) {
    console.log('Entrada Liberada')
} else if( id <= 18) {
    console.log('Entrada bloqueda, você é menor de idade');
}

console.log('_ _ _ _ _ _ _ _ _ _ ')

/*--- EXEMPLOS --------- */
var Ano = 2010;
var Aataul = 2023;
var res = Aataul - Ano;
if (res >= 18){
    console.log(`Sua idade é ${res}`);
    console.log('entrada Liberada')
} else {
console.log(`Sua idade é ${res}`);
console.log('Entrada Bloqueada')
}