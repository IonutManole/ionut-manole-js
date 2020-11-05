console.warn(`
  Creeaza o functie overloaded pentru calcularea suprafetelor.
  Daca primeste un parametru, sa calculeze suprafata unui patrat.
  Daca primeste doi, a unui dreptunghi.
  Daca primeste trei, sa calculeze suprafata totala a paralelipipedului.
  Foloseste structura switch.
`);
function calculateSurface(L, l, h) {
  switch (arguments.length) {
    case 3:
      return L * l * h;
      break;
    case 2:
      return L * l;
      break;
    case 1:
      return Math.pow(L, 2);
      break;
  }
}

function calculateSurfaceAlt(L, l, h) {
  if (arguments.length === 3) {
    return L * l * h;
  } else if (arguments.length === 2) {
    return L * l;
  } else if (arguments.length === 1) {
    return Math.pow(L, 2);
  }
}

console.log(`Suprafata patrat = ${calculateSurface(4)}`);
console.log(`Suprafata Dreptunghi = ${calculateSurface(4, 5)}`);
console.log(`Suprafata Paralelipiped = ${calculateSurface(4, 5, 3)}`);

console.warn(`
  Creeaza o functie numita calculateCircleArea() si afiseaza suprafata
  unor cercuri cu raza de 2, 20 si 16.
`);
function calculateCircleArea(r) {
  return Math.PI * Math.pow(r, 2);
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`
  Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
  Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani”
  Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta
  animalului si afiseaza propozitia: “Animalul meu are petAge ani”
`);
let pet = {
  getName: function () {
    return 'Hunter';
  },
  getSpecies: function () {
    return 'dog';
  },
  getAge: function () {
    return 4;
  },
};
console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

let petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
