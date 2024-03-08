// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// creare le lista delle mail
const mailList = ["wonder.woman@amazons.com", "iron.man@starkindustries.com", "sherlock.holmes@221b.bakerstreet.com", "cap.america@shield.com", "black.widow@shield.com", "thor.odinson@asgard.com", "dumbledore@hogwarts.com", "gandalf@middleearth.com", "spock@enterprise.federation.com", "rey@resistance.com"];
console.log(mailList)

// chiedere all'utente qual'è la mail sua
const userMail = prompt('Scrivimi la tua mail');
console.log(userMail)

// controlla che la mail dell'utente sia nella lista delle mail
let mailFound = false;
for (let i = 0; i < mailList.length; i++){
    const thisMail= mailList[i]
    console.log(mailList[i])
    // se è presente stampami vero
    if(thisMail === userMail){
        mailFound = true;
        console.log(mailFound)
    }
}

// stampare un messaggio all'utente
if (mailFound === true){
    alert('Puoi entrare')
} else {
    alert('Vietato entrare')
}
console.log(mailFound)

