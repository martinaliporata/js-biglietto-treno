// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.276 € al km)
// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
const kmUser = Number.parseFloat(prompt('Inserisci quanti km vuoi percorrere'), 10);

// Il programma dovrà chiedere all'utente l'età del passeggero
const ageUser = Number.parseInt(prompt('Inserisci eta del passeggero'),10);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.276 € al km)
const prezzoAlKm = 0.276;
let sconto = 0;

// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
if (ageUser > 65) {
    sconto = 42;
}else if (ageUser < 18) {
    sconto = 21;
}

// costo base
let prezzo = prezzoAlKm * kmUser; 
prezzo = prezzo - ((prezzo/100) * sconto);
console.log(prezzo.toFixed(2))

// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo)