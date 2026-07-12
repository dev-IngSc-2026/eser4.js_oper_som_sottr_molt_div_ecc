// 1. Chiediamo all'utente di inserire due numeri tramite prompt.
// Il prompt ci restituisce una stringa (testo), quindi dobbiamo convertirla in numero.
// Usiamo parseFloat per permettere anche l'inserimento di numeri decimali.
let input1 = prompt("Inserisci il primo numero:");
let input2 = prompt("Inserisci il secondo numero:");

let numero1 = parseFloat(input1);
let numero2 = parseFloat(input2);

// 2. Eseguiamo i vari calcoli matematici
let somma = numero1 + numero2;
let sottrazione = numero1 - numero2;
let moltiplicazione = numero1 * numero2;
let divisione = numero1 / numero2;
let potenza = numero1 ** numero2; // L'operatore ** esegue l'elevamento a potenza

// 3. Mostriamo il risultato in console usando i template literal
console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (${somma}), sottrazione (${sottrazione}), moltiplicazione (${moltiplicazione}), divisione (${divisione}), potenza (${potenza}).`);