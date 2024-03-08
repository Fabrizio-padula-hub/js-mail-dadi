// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"



// GIOCO DEI DADI

// generare numero random da 1-6
// per l'utente
const randomNumberUser = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberUser)

// per il pc
const randomNumberComputer = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberComputer)



// confrontare i due numeri
    // stampare il vincitore
    // vedere il punteggio più alto
let winnerMessage
if (randomNumberUser > randomNumberComputer){
    winnerMessage = "L'utente ha vinto";
    console.log(winnerMessage)
}else if (randomNumberUser < randomNumberComputer){
    winnerMessage = "il computer ha vinto";
    console.log(winnerMessage)
    // stampare il vincitore
}else {
    winnerMessage = "pari";
    console.log(winnerMessage)
}







    
