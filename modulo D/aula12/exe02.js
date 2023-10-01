var agora = new Date() // Data atual
var hora = agora.getHours() // Data atual 
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom Dia')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else if (hora >= 24) {
    console.log('Boa Madrugada')
} else if (hora <= 5) {
    console.log('Bom dia')
}