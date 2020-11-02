let person = {
  getName: () => {
    return 'Ionut Manole';
  },
  getAge: () => {
    return 32;
  },
};

let accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;

  return person[methodName]();
};

console.log(accessor('Name'));

console.warn(`
  Folosind accesorul salveaza numele mic al persoanei intr-o variabila si
  foloseste-l in propoztia: “Eu sunt xxx.”
`);
let fullName = accessor('Name');
let name = fullName.split(' ')[0];
console.log(`Eu sunt ${name}.`);

console.warn(`Afiseaza diferenta de varsta dintre tine si persoana.`);
console.log(`Diferenta este ${Math.abs(34 - accessor('Age'))}.`);

console.warn(`
  Afiseaza anul de nastere al persoanei folosind anul curent.
`);
let currentYear = new Date().getFullYear();

console.log(currentYear - accessor('Age'));

console.warn(`
  Afiseaza propozitia “Ma numesc xxx si am yy ani si m-am nascut acum aa ani.”
`);
console.log(`
  Ma numesc ${accessor('Name')} si am ${accessor(
  'Age',
)} ani si m-am nascut acum ${accessor('Age')} ani.
`);

console.warn(`
  Folosind accesorul afiseaza numele persoanei.
`);
console.log(accessor('Name'));

console.warn(`
  Afiseaza varsta persoanei.
`);
console.log(accessor('Age'));

console.warn(`
  Afiseaza anul de nastere al persoanei folosind anul curent.
`);

console.log(currentYear - accessor('Age'));

console.warn(`
  Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(`
  Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!
`);
