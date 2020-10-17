var messageParagraph = document.getElementById('message');
var secondMessageParagraph = document.querySelector('.message2');
var thirdMessageParagraph = document.querySelector('body p:nth-of-type(3)');
var userName = prompt('Introdu numele:');
var letter = prompt('Ce litera sa caut?');
// var userNameLength = userName.replaceAll(' ', '').length;
var userNameLength = userName.replace(/ /g, '').length;

var message = `Numele meu este: ${userName}.`;
var message2 = `Numele introdus are ${userNameLength} caractere.`;
var phraseFragment = '';

if (userName.includes(letter)) {
  phraseFragment = 'include';
} else {
  phraseFragment = 'nu include';
}

var message3 = `Numele introdus ${phraseFragment} litera ${letter}.`;

messageParagraph.innerText = message;
secondMessageParagraph.textContent = message2;
thirdMessageParagraph.textContent = message3;
