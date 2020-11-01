let testNumber = prompt('Introdu un numar: ');
let limitNumber = prompt(
  'Introdu limita superioara pana la care sa se afiseze multiplii: ',
);

if (testNumber === null || testNumber === '' || isNaN(testNumber)) {
  testNumber = 7;

  console.warn(`Nu ai introdus un numar. Se va folosi numarul ${testNumber}`);
}

for (let i = 0; i <= limitNumber; i++) {
  console.log(i);

  if (i % testNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${testNumber}.`);
}
