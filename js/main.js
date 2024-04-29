"use strict";
// variabile età//

// const travelerAge = Number(('inserire l\' eta'));
// console.log('età passeggero', travelerAge);

// //variabile km da percorerre//

// const travelerKM = Number(('inserire km da percorrere'));
// console.log('travelKM', travelerKM);

// //variabile prezzo per km//

// const priceKM = 0.21;
// console.log('priceKM', priceKM);

// //PERCENTUALI//

// const discount20 = 20;
// console.log('sconto minorenni :' + discount20);

// const discount40 = 40;
// console.log('sconto over 65 :' + discount40);

// //svolgimento//

// let total = priceKM * travelerKM;

// // }

// if (travelerAge < 18) {
//     total = (total / 100 * discount20);

// } else if (travelerAge > 65) {
//     total = (total / 100 * discount40);

// }
// //ARROTONDAMENTO DECIMALE//

// console.log(`prezzo finale è' ${total.toFixed(2)}€`);


// REFS FORM E INPUT
const form = document.getElementById('btn-generator');
// console.log(form);
const inputKm = document.querySelector('.km');
// console.log(inputKm);
const inputAge = document.querySelector('.age');
const totalElement = document.getElementById('total');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // lettra val;
    // //variabile km da percorerre//
    const travelerKM = Number(inputKm.value);
    const travelerAge = Number(inputAge.value);
    // //variabile prezzo per km//
    const priceKM = 0.21;
    // controllo età
    const discount20 = 20;
    const discount40 = 40;
    //TOTALE
    let total = priceKM * travelerKM;
    console.log('total', total);

    if (travelerAge < 18) {
        total = (total / 100 * discount20);

    } else if (travelerAge > 65) {
        total = (total / 100 * discount40);

    }

    totalElement.innerHTML = `${total.toFixed(2)}€`;

    // END EVENT FUNCTION
})

// DETECT EVENT (submit oppure click)
// LETTURA DEI VALORI INPUT
