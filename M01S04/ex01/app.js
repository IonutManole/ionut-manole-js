var messageParagraph = document.getElementById('message');
var secondMessageParagraph = document.getElementById('message2');
var value = window.prompt('Introdu o valoare: ');
// var isOdd = false;

// if (value % 2 === 0) {
//   isOdd = false;
// } else {
//   isOdd = true;
// }

// // ternary operator
// var word = isOdd === true ? 'impara' : 'para';

// console.log(`Valoarea este ${value} si este ${word}.`);

var word = 'para';

if (value % 2 === 0) {
  word = 'para';
} else {
  word = 'impara';
}

var message = `Valoarea este ${value} si este ${word}.`;

messageParagraph.innerText = message;
// messageParagraph.textContent = message;

// Tema
// Folosind metoda prompt() afiseaza in pagina mesajul:
// “Numarul introdus este mai mic | mai mare decat 20.”
let word2 = 'mai mic';

if (value < 20 && !isNaN(value) && parseInt(value) !== null) {
  word2 = 'mai mic';
} else if (value > 20 && !isNaN(value) && parseInt(value) !== null) {
  word2 = 'mai mare';
} else if (value === 20 && !isNaN(value) && parseInt(value) !== null) {
  word2 = 'egal';
} else {
  word2 = 'incorect input';
}
let message2 = `Numarul introdus este ${word2} decat 20`;

secondMessageParagraph.textContent = message2;
