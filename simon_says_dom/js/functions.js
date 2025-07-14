/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 

/*"Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array" 

/*recupero gli elementi che mi servono dal dom*/

const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
const formAnswers = document.getElementById("answers-form");
const inputNumbers = document.querySelectorAll('.form-control');
const button = document.getElementById('btn');

//attraverso la numberslist genero in modo randomico 5 numeri compresi tra 1 e 50 
//da quando i numeri random appaiono in pagina deve partire un countdown da 30 secondi
//passati 10 secondi i numeri random devono sparire 
//al posto dei numeri random devono apparire 5 imput per far inserire all'utente i numeri random visti
//creo l'evento al click del pulsante per confrontare i numeri random con quelli inseriti
//mostro i risultati del confronto inserendo il numero di numeri indovinato e mostrando quali numeri ha indovinato l'utente

//genero 5 numeri random
const numberRandom = [ ];

for ( let i = 0; i < 5; i++){

  const numberCasual = Math.floor(Math.random() * (50 - 1 + 1 )) +1;

  numberRandom.push(numberCasual);
   
}
console.log(numberRandom);

document.getElementById('numbers-list').innerHTML = numberRandom.join(' ');

//faccio partire un countdown di 30s quando i numeri random appaiono in pagina

let second = 30;

const timer = setInterval(() =>{

  second--;
  countdown.innerHTML = `${second}`;

  if(second === 20){
    
    numbersList.classList.add("d-none");
    document.getElementById('answers-form').classList.remove('d-none');
  }
  else if(second <= 0){

    clearInterval(timer);
    countdown.innerHTML = `tempo scaduto`
  }

}, 1000);

//creo l'evento al click del pulsante per confrontare i numeri random con quelli inseriti
//confrontare numbersRandom con inputnumbers
//mostro i risultati del confronto inserendo il numero di numeri indovinato e mostrando quali numeri ha indovinato l'utente


const message = document.getElementById('message');
const numberFound = [];


btn.addEventListener('click', function (event) {
  event.preventDefault();
    
  const userNumbers = Array.from(inputNumbers).map(input => parseInt(input.value));
  numberFound.length = 0;

    for(let i = 0; i < numberRandom.length; i++){
        
      if(userNumbers.includes(numberRandom[i])){
         numberFound.push(numberRandom[i]);
      }
      
    }
    
  
   message.innerHTML = `Hai indovinato ${numberFound.length} numeri!:( ${numberFound.join(' ')})`;

   });
  
