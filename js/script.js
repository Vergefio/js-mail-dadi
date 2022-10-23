/***Mail**
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

//mettere costante
const lista = document.querySelector(`ul`);


const mail = [
  `riccardo.21@live.it`,
  `riccardo.24@live.it`,
  `riccardo.27@live.it`,
  `riccardo.29@live.it`,
  `riccardo.20@live.it`,
  `riccardo.25@live.it`,
  `riccardo.26@live.it`,
  `riccardo.23@live.it`,
  `riccardo.22@live.it`,
  `riccardo.28@live.it`,
]
let okMail = false;
let index;
const output = document.querySelector(`output`);

const insertMail = prompt(`inserisci la tua mail`);
console.log(mail);


for (let i = 0; i < mail.length; i++) {

  if (mail[i] === insertMail) {
    okMail = true;
  } else {
  }
}

if (okMail) {
  output.innerHTML = `Mail Valida`;
} else {
  output.innerHTML = "Mail non valida";
}



/***Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/


const minDado = 1;
const maxDado = 6
const numBtn = document.getElementById('lanciodadi');
const container = document.querySelector('.risultato');

let outputPerson;
let outputCpu;
let outputRisultato;
let numPerson = 0;
let numCpu = 0;

numBtn.addEventListener('click', function () {
  // costanti
  container.innerHTML = '';
  numPerson = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);
  numCpu = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);

  // creazione div
  outputPerson = document.createElement('div');
  outputCpu = document.createElement('div');
  outputPerson.innerHTML = `Il tuo numero é:  ${numPerson}`;
  outputCpu.innerHTML = `Il numero del computer è:  ${numCpu}`;
  container.append(outputPerson);
  container.append(outputCpu);

  //condizioni
  outputRisultato = document.createElement('div');
  if (numPerson > numCpu) {
    outputRisultato = 'HAI VINTO, SEI IL RE DEI DADI!';
  } else if (numCpu > numPerson) {
    outputRisultato = 'LOOSER';
  } else {
    outputRisultato = 'PAREGGIO!';
  }

  container.append(outputRisultato);
})