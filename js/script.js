console.log('JS OK');


// # OPERAZIONI PRELIMINARI

//RECUPERO IL PLACEHOLDER DAL DOM

const passwordPlaceholder = document.getElementById('personal-password');
console.log(passwordPlaceholder);

// CREAZIONE NUMERO 21

const passwordNumber = 21;

// CHIEDIAMO IL NOME ALL'UTENTE, SALVO E VERIFICO 

const userName = prompt('come ti chiami?', 'Gioele');
console.log(userName);

// CHIEDIAMO IL COGNOME ALL'UTENTE, SALVO E VERIFICO 

const userLastname = prompt('Qual\'è il tuo cognome?', 'Iacovella');
console.log(userLastname);

// CHIEDIAMO IL COLORE PREFERITO ALL'UTENTE, SALVO E VERIFICO 

const userFavouritecolor = prompt('Qual\'è il tuo colore preferito?', 'Rosso');
console.log(userFavouritecolor);

// CREIAMO LA PASSWORD

const password = userName+userLastname+userFavouritecolor+passwordNumber;
console.log(password);

// INSERISCO NELL'ELEMENTO IN PAGINA

passwordPlaceholder.innerText = password;