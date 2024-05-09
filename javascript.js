// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.276 € al km)
// va applicato uno sconto del 21% per i minorenni
// va applicato uno sconto del 42% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]

const kmUser = prompt('Quanti km vuoi percorrere');
console.log(kmUser);

const ageUser = prompt('Quanti anni ha il passeggero');
ageUser = parseInt(ageUser);
console.log(ageUser);

// kmUser * 0.276 questo è il prezzo

if ageUser<18 {
    let sconto = 21
}

let scontoSulPrezzo = (prezzo/100) * sconto
let prezzoScontato = prezzo - scontoSulPrezzo
console.log(sconto, prezzoScontato)

if ageUser>65 {
    let sconto = 42
}

let scontoSulPrezzo = (prezzo/100) * sconto
let prezzoScontato = prezzo - scontoSulPrezzo
console.log(sconto, prezzoScontato)