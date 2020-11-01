// let i = 1;

// do {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
//   i++;
// } while (i < 100);

console.warn(`
  Modifica exemplul astfel incat bucla sa
  numere de la 1 la 52
`);
// let i = 1;

// do {
//   console.log(i);

//   if (i === 52) {
//     break;
//   }
//   i++;
// } while (i < 100);

console.warn(`
  Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
`);
// let i = 1;

// do {
//   console.log(i);

//   if (i === 51) {
//     break;
//   }
//   i++;
// } while (i < 100);

console.warn(`
  Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
`);
// let i = 1;

// do {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }
//   i++;
// } while (i < 100);

console.warn(`
  Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
`);
let i = 8;

do {
  i++;

  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
} while (i < 32);

console.warn(`
  Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara
  si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara
  si limita superioara introduse.
`);

let inputNumber;
let lowerLimit;
let upperLimit;

inputNumber = prompt(`Introdu un numar:`);
while (inputNumber === null || inputNumber === '' || isNaN(inputNumber)) {
  inputNumber = prompt(`Introdu un numar pentru a continua: `);
}

lowerLimit = prompt(`Introdu o limita inferioara:`);
while (lowerLimit === null || lowerLimit === '' || isNaN(lowerLimit)) {
  lowerLimit = prompt(`Introdu un numar pentru a continua: `);
}

upperLimit = prompt(`Introdu o limita superioara:`);
while (upperLimit === null || upperLimit === '' || isNaN(upperLimit)) {
  upperLimit = prompt(`Introdu un numar pentru a continua: `);
}

upperLimit = parseInt(upperLimit);
inputNumber = parseInt(inputNumber);
lowerLimit = parseInt(lowerLimit);

if (upperLimit < lowerLimit) {
  prompt(`Alege un numar mai mare de ${lowerLimit} pentru limita superioara: `);
} else if (inputNumber > upperLimit) {
  prompt(
    `Alege un numar mai mare de ${inputNumber} pentru limita superioara: `,
  );
} else if (lowerLimit > inputNumber) {
  prompt(
    `Alege un numar mai mare de ${inputNumber} pentru limita inferioara: `,
  );
}

for (let i = lowerLimit; i <= upperLimit; i++) {
  console.log(i);
  if (i % inputNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${inputNumber}.`);
}
