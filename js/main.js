"use strict";
// REFS FORM E INPUT
const generatorBtn = document.getElementById('btn-generator');
// console.log(form);
//DELETE BTN//
const deleteBtn = document.getElementById('btn-delete')
// console.log(deleteBtn)
const userName = document.querySelector('.user-name')
const inputKm = document.querySelector('.km');
const inputAge = document.querySelector('.age');
const totalElement = document.getElementById('total');

generatorBtn.addEventListener('click', function (e) {
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

// DELETE VALUE//
deleteBtn.addEventListener('click', function (e) {
    e.preventDefault();
    userName.value = ('');
    inputKm.value = ('');
    inputAge.value = ('');
})


// DETECT EVENT (submit oppure click)
// LETTURA DEI VALORI INPUT
