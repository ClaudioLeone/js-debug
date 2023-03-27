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

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/*
    1. Questo codice serve a riportare una stringa in console che indichi il numero totale di elementi (di colori in questo caso) presenti nell'array di elementi dichiarato.

    2. SI, è presente un errore di sintassi, ovvero la posizione delle ultime due lettere della parola 'length' è stata inserita al contrario, producendo 'lenght' come metodo per il nostro array 'colors' che non può essere riconosciuto come metodo valido poiché inesistente.
    
    3. NO, non sono presenti errori logici.
*/

///////////////////////////////////////////////////////////////////////////////////

// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

/*
    1. Questo codice serve a sommare il numero inserito dall'utente via input con un numero che abbiamo scelto noi come addendo e riportarne il risultato in console.

    2. NO, non sono presenti errori di sintassi.

    3. SI, è presente un errore logico: la funzione svolge correttamente il suo lavoro a livello tecnico ma se, al suo interno, non convertiamo l'input dell'utente (che nativamente è di tipo 'stringa') in un numero la somma dell'input e del nostro numero darà come risultato un concatenamento di stringhe (esempio ->>> input: '0';  numero scelto da noi: '12'; RISULTATO IN CONSOLE: '012').
*/

///////////////////////////////////////////////////////////////////////////////////

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

// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === "true") {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/*
    1. Questo codice serve a permettere o negare l'accesso di un utente al sito in cui vuole accedere in base alla corretta o errata scrittura del proprio indirizzo e-mail, quindi anche a non permettere l'accesso ad utenti non registrati.

    2. SI, è presente un errore di sintassi: non è stata messa tra le virgolette ("") la parola 'true' all'interno della condizione di 'if', quindi anche se la mail viene inserita correttamente la condizione non viene calcolata ed il risultato sarà sempre "Accesso negato!".

    3. NO, non sono presenti errori logici.
*/

///////////////////////////////////////////////////////////////////////////////////