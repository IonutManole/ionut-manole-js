var person = {
  firstName: 'Ionut',
  lastName: 'Manole',
  email: 'ionut@gmail.com',
  birthYear: '1999',
  pets: [
    {
      name: 'Hunter',
      species: 'rotweiler',
      age: '5',
    },
    {
      name: 'Donatello',
      species: 'turtle',
      age: '50',
    },
    {
      name: 'Coco',
      species: 'parrot',
      age: '2',
    },
  ],
  zipCode: 1234,
};

// Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”.
// Nu uita de proprietatea length a arrayului pets.
console.log(
  `Numele meu este: ${person.firstName} ${person.lastName} si am ${person.pets.length} animale`,
);

// Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.
console.log(`Am acelasi email din copilarie: ${person.email}`);

// Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[0].species} si are ${person.pets[0].age} ani.`,
);

// Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului
// de pe pozitia 2.
let currentYear = new Date().getFullYear();
console.log(currentYear - person.pets[2].age);

// Calculeaza si salveaza in variabila difference diferenta de ani dintre
// persoana si animalul de pe pozitia 0. Foloseste anul curent.
let difference = currentYear - person.birthYear - person.pets[0].age;

// Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
let petName = person.pets[0].name;

// Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani”.
console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

// Folosind metoda document.getElementById() afiseaza urmatoarele 4 afirmatii despre obiectul person.
// Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa”
// (folosind bracket notation pe arrayul pets)
// Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
// Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
// Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.”
// Foloseste anul curent pentru a efectua scaderea.

let firstPhrase = document.getElementById('prop01');
let secondPhrase = document.getElementById('prop02');
let thirdPhrase = document.getElementById('prop03');
let fourthPhrase = document.getElementById('prop04');

let firstMessage = `
${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name},
${person.pets[2].name} locuiesc toti in aceeasi casa
`;
let secondMessage = person.pets[0].age - person.pets[2].age;
let thirdMessage = `
  Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear}
  si codul meu postal este: ${person.zipCode}
`;
let fourthMessage = `
  Animalele mele s-au nascut in ${currentYear - person.pets[0].age}, ${
  currentYear - person.pets[1].age
},
  respectiv ${currentYear - person.pets[2].age}.
`;

firstPhrase.textContent = firstMessage;
secondPhrase.textContent = secondMessage;
thirdPhrase.textContent = thirdMessage;
fourthPhrase.textContent = fourthMessage;
