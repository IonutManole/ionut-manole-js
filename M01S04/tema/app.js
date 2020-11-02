var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
  Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);
person.pets.forEach((pet) => {
  console.log(pet.name);
});

console.warn(`
  Folosind o bucla for afiseaza suma anilor animalelor.
`);
let petsAge = 0;
for (let i = 0; i < person.pets.length; i++) {
  const pet = person.pets[i];
  petsAge += pet.age;
}
console.log(petsAge);

console.warn(`
  Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
person.pets.forEach((pet) => {
  console.log(`
    ${pet.name} este ${pet.species} si are ${pet.age} ani.
  `);
});

console.warn(`
  Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani.
  Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
let currentYear = new Date().getFullYear();
let personAge = currentYear - person.birthYear;
for (let i = 0; i < person.pets.length; i++) {
  const pet = person.pets[i];
  const ageDifference = Math.abs(personAge - pet.age);
  console.log(`
    Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDifference} ani.
  `);
}

console.warn(`
  Folosind o bucla for afiseaza in ordine inversa numele animalelor din array (.reverse() si inainte si dupa bucla).
`);
person.pets.reverse();
for (let i = 0; i < person.pets.length; i++) {
  console.log(person.pets[i].name);
}
person.pets.reverse();

console.warn(`
  La fel si cu forEach()
`);
person.pets.reverse().forEach((pet) => {
  console.log(pet.name);
});
person.pets.reverse();

console.warn(`
  Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
  “xxx este cel mai batran animal pe care il am si este cu y ani mai mic decat mine.”
`);
let oldestPet = 0;
let oldestPetName;
for (let i = 0; i < person.pets.length; i++) {
  if (person.pets[i].age > oldestPet) {
    oldestPet = person.pets[i].age;
    oldestPetName = person.pets[i].name;
  }
}
console.log(`
  ${oldestPetName} este cel mai batran animal pe care il am si este cu ${
  personAge - oldestPet
} ani mai mic decat mine.
`);

console.warn(`
  Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);
let sentence = 'Am ';
person.pets.forEach((pet, i, pets) => {
  punctuation =
    i === pets.length - 1 ? '.' : i === pets.length - 2 ? ' si ' : ', ';

  sentence += pet.species + punctuation;
});
console.log(sentence);

console.warn(`
  Folosind fisierele de la exercitiul 06, si doua bucle for imbricate (nested)
  afiseaza diferenta de varsta dintre fiecare membru al arrayului friends
  si ceilalti membri.
  Poti folosi metoda pentru a converti numerele negative in pozitive.
`);
let person = {
  name: 'Ionut',
  surname: 'Manole',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};
