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
    'jquerry',
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

console.warn(
  `Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.
  `,
);
person.skills.forEach((skill, i) => {
  if (i % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(
  ` In mod similar, afiseaza skillurile care contin litera a.
  `,
);
person.skills.forEach((skill, i) => {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

console.warn(
  ` Folosind forEach afiseaza propozitia:
  "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."
  `,
);
let sentence = 'Prietenii mei se numesc ';
person.friends.forEach((friend, i, friends) => {
  let fullName = `${friend.name} ${friend.surname}`;
  let punctuation = ', ';

  // if (i === friends.length - 1) {
  //   punctuation = '.';
  // }

  // if (i === friends.length - 2) {
  //   punctuation = ' si ';
  // }

  punctuation =
    i === friends.length - 1 ? '.' : i === friends.length - 2 ? ' si ' : ', ';

  sentence += fullName + punctuation;
});

console.log(sentence);

console.warn(`
Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
doar daca au varsta mai mare decat 30 inclusiv.
`);
let sumYears = 0;
person.friends.forEach((friend) => {
  if (friend.age >= 30) {
    sumYears += friend.age;
  }
});
console.log(sumYears);

console.warn(`
Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.
`);
let currentYear = new Date().getFullYear();
let sumBirthYears = person.age % 2 === 0 ? 0 : currentYear - person.age;
person.friends.forEach((friend) => {
  sumBirthYears += friend.age % 2 === 0 ? 0 : currentYear - friend.age;
});
console.log(sumBirthYears);

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.
`);
person.friends.forEach((friend) => {
  let ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(`
Afiseaza fraza:
"Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "
`);
sentence = '';
person.friends.forEach((friend) => {
  let ageDiff = Math.abs(person.age - friend.age);

  sentence += `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani. `;
});
console.log(sentence);

console.warn(`
Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.
`);
person.skills.reverse();
person.skills.forEach((skill) => {
  console.log(skill);
});
person.skills.reverse();
