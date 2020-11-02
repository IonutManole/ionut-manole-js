let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let queryButton = document.getElementById('query');
let paragrapgh = document.getElementById('paragraph');
let clickHandler = () => {
  alert('Ai apasat butonul!');
};

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

console.warn(`
Adauga un buton nou in document cu id-ul query si folosind addEventListener()
ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta
utilizatorului.

Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola
folosind template strings: “Ai aa ani.”.

Creaza un paragraf cu idul message si folosind getElementById() stocheaza
elementul intr-o variabila, apoi folosind innerText (textContent),
afiseaza mesajul de mai devreme in acest paragraf.
`);
queryButton.addEventListener('click', () => {
  let queryMessage = prompt('Cati ani ai?');
  console.log(`Ai ${queryMessage} ani.`);
  paragrapgh.textContent = `Ai ${queryMessage} ani`;
});
