var messageParagraph = document.getElementById('message');
var secondMessageParagraph = document.querySelector('.message2');
var thirdMessageParagraph = document.querySelector('body p:nth-of-type(3)');
var userName = prompt('Introdu numele:');
// var userNameLength = userName.replaceAll(' ', '').length;
var userNameLength = userName.replace(/ /g, '').length;

var message = `Numele meu este: ${userName}.`;
var message2 = `Numele introdus are ${userNameLength} caractere.`;
var phraseFragment = '';

if (userName.includes('a')) {
  phraseFragment = 'include';
} else {
  phraseFragment = 'nu include';
}

var message3 = `Numele introdus ${phraseFragment} litera a.`;

messageParagraph.innerText = message;
secondMessageParagraph.textContent = message2;
thirdMessageParagraph.textContent = message3;
