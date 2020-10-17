var i;

// for (i = 1; i < 100; i++) {
//   console.log(i);

//   if (i === 50) {
//     break;
//   }
// }

// for (i = 1; i <= 100; i++) {
//   if (i % 5 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

// Modifica exemplul astfel incat bucla sa numere de la 1 la 89.
for (i = 1; i < 90; i++) {
  console.log(i);
}

// Modifica exemplul astfel incat bucla sa numere de la 1 la 88 .
for (i = 1; i < 89; i++) {
  console.log(i);
}

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.
for (i = 1; i < 89; i++) {
  console.log(i);

  if (i === 42) {
    break;
  }
}

// Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.
for (i = 1; i < 90; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

// In mod similar, afiseaza doar numerele care sunt divizibile cu 3.
for (i = 1; i <= 100; i++) {
  if (i % 3 !== 0) {
    continue;
  }

  console.log(i);
}
