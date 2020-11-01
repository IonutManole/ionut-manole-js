// let i = 0;

// while (i < 100) {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }

//   i++;
// }

console.warn(`
Modifica exemplul astfel incat bucla sa
numere de la 1 la 67.
`);
// let i = 0;

// while (i < 100) {
//   console.log(i);

//   if (i === 67) {
//     break;
//   }

//   i++;
// }

console.warn(`
Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
`);
// let i = 0;

// while (i < 100) {
//   console.log(i);

//   if (i === 66) {
//     break;
//   }

//   i++;
// }

console.warn(`
Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
`);
// let i = 0;

// while (i < 100) {
//   console.log(i);

//   if (i === 12) {
//     break;
//   }

//   i++;
// }

console.warn(`
Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
`);
// let i = 0;

// while (i <= 100) {
//   i++;

//   if (i <= 32) {
//     if (i % 2 !== 0) {
//       continue;
//     }
//     console.log(i);
//   }
// }

console.warn(`
  Folosind metoda prompt de doua ori cere utilizatorului un numar si o
  limita superioara apoi afiseaza toti multiplii de numar intre 5 si
  limita superioara introduse.
`);

let inputNumber;
let startNumber = 5;
let limitNumber;

inputNumber = prompt(`Introdu un numar:`);
while (inputNumber === null || inputNumber === '' || isNaN(inputNumber)) {
  inputNumber = prompt(`Introdu un numar pentru a continua: `);
}

limitNumber = prompt(`Introdu o limita superioara:`);
while (limitNumber === null || limitNumber === '' || isNaN(limitNumber)) {
  limitNumber = prompt(`Introdu un numar pentru a continua: `);
}

limitNumber = parseInt(limitNumber);
inputNumber = parseInt(inputNumber);

if (limitNumber < startNumber) {
  prompt(
    `Alege un numar mai mare de ${startNumber} pentru limita superioara: `,
  );
} else if (inputNumber > limitNumber) {
  prompt(
    `Alege un numar mai mare de ${inputNumber} pentru limita superioara: `,
  );
}

for (let i = startNumber; i <= limitNumber; i++) {
  console.log(i);
  if (i % inputNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${inputNumber}.`);
}
