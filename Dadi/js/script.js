// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// GIOCO DEI DADI

// generare numero random da 1-6
// per l'utente
const randomNumberUser = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberUser)

// per il pc
const randomNumberComputer = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberComputer)



// confrontare i due numeri
    // vedere il punteggio più alto
    // stampare il vincitore

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




    
