var ionut = {
  name: 'Ionut',
  surname: 'Manole',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

ionut.friends.larry = larry;
ionut.friends.steven = steven;
ionut.friends.andra = andra;

// console.log(ionut);
// console.log(ionut.friends);

larry.friends.ionut = ionut;
steven.friends.ionut = ionut;
andra.friends.ionut = ionut;

// console.log(ionut.friends);

// Seteaza-l pe Steven ca prieten al lui Larry si al Anitei (si invers).
larry.friends.steven = steven;
andra.friends.steven = steven;
steven.friends.larry = larry;
steven.friends.andra = andra;

andra.friends.carol = carol;
carol.friends.andra = andra;

// Folosind keywordul delete sterge prietenia dintre Dragos si Larry (si invers).
delete ionut.friends.larry;
delete larry.friends.ionut;

// Folosind obiectul Carol afiseaza numele complet al lui Dragos.
console.log(
  `${carol.friends.andra.friends.ionut.name} ${carol.friends.andra.friends.ionut.surname}`,
);

// Folosind obiectul Andra afiseaza numarul total de caractere
// al numelui complet al lui Dragos.
console.log((andra.friends.ionut.name + andra.friends.ionut.surname).length);
