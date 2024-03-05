// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Cosa ci serve: numero di km da percorrere, età del passeggero
let userKm = parseInt(prompt('Quanti chilometri devi percorrere?'));
console.log(userKm);

const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

// calcolare prezzo del biglietto base (km * 0.21)
const regularPrice = 0.21;
const totalPrice = userKm * regularPrice;
console.log(totalPrice);


// applicare sconto in base alle condizioni
let discount;

if (userAge < 18) {
    discount = totalPrice * 20 / 100;
} else if (userAge > 65) {
    discount = totalPrice * 40 / 100;
} else {
    discount = 'Nessuno sconto applicato!'
    document.getElementById('discounted-price').innerHTML = discount
}
console.log(discount);

// calcolare prezzo totale del viaggio
const discountedPrice = regularPrice - discount;
const finalPrice = totalPrice - discount;
console.log(discountedPrice);
console.log(finalPrice);

// arrotondare il prezzo

let rounded = Math.round((finalPrice + Number.EPSILON) * 100) / 100;
let roundedDiscounted = Math.round((discountedPrice + Number.EPSILON) * 100) / 100;
console.log(rounded);
console.log(roundedDiscounted);

// output all'utente
document.getElementById('total-km').innerHTML = userKm
document.getElementById('user-age').innerHTML = userAge

if (discount != 'Nessuno sconto applicato!') {
    document.getElementById('discounted-price').innerHTML = roundedDiscounted
    document.getElementById('total-price').innerHTML = rounded

} else {
    document.getElementById('total-price').innerHTML = totalPrice

}