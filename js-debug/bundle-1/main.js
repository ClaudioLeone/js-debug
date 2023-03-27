/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }

    console.log(message);
}
checkAge();

/*
    1. Questo codice, premettendo che l'input dell'utente sul quale si è settata una condizione sia costante e settato a '32' come valore, restituisce un messaggio specifico sulla console in base all'esito della condizione imposta (in questo caso SE l'input è < di 18 viene restituito un messaggio, ALTRIMENTI un altro messaggio)

    2. SI, è presente un errore di sintassi, ovvero l'assegnazione di 'const' come tipo di variabile da modificare in seguito all'esito della condizione:
       infatti se si crea una variabile che abbiamo intenzione di modificare come 'const' questa sarà interpretata come variabile COSTANTE, che quindi non può variare.
       La soluzione si ottiene creando la nostra variabile con 'let'.
    
    3. SI, è presente un errore logico: non è stato inserito un output per la funzione che, si, viene eseguita senza errori essendo stata richiamata ma essendo che la funzione serve a restituire un messaggio questo non verrà mai letto dall'utente se non forniamo alla funzione un modo per parlare con l'utente [console.log() || alert() || inserimento di tag contenente il testo del messaggio calcolato dalla funzione all'interno del documento html].

*/

///////////////////////////////////////////////////////////////////////////////////

// // ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();


// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();


// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = [
//         'mymail@mail.com',
//         'yourmail@mail.com',
//         'hermail@mail.com',
//         'hismail@mail.com',
//     ];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();
