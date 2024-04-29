"use strict";
// variabile età//

const travelerAge = Number(('inserire l\' eta'));
console.log('età passeggero', travelerAge);

//variabile km da percorerre//

const travelerKM = Number(('inserire km da percorrere'));
console.log('travelKM', travelerKM);

//variabile prezzo per km//

const priceKM = 0.21;
console.log('priceKM', priceKM);

//PERCENTUALI//

const discount20 = 20;
console.log('sconto minorenni :' + discount20);

const discount40 = 40;
console.log('sconto over 65 :' + discount40);

//svolgimento//

let total = priceKM * travelerKM;

// }

if (travelerAge < 18) {
    total = (total / 100) * (100 - discount20);

} else if (travelerAge > 65) {
    total = total * (discount40 / 100);

}
//ARROTONDAMENTO DECIMALE//

console.log(`prezzo finale è' ${total.toFixed(2)}€`);