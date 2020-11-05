// Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
// Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea
// isTrunkOpen pe true, respectiv false.
// Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune,
// folosind metoda window.setTimeout().

let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,
  accelerate: function (units) {
    this.speed = car.speed + units;
  },
  decelerate: function (units) {
    this.speed = car.speed - units;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    console.log(this.areLightsOn);

    setTimeout(() => {
      this.turnLightsOff();
      console.log(this.areLightsOn);
    }, 3000);
  },
  stop: function () {
    this.speed = 0;
    console.log(this.speed);
  },
  setSpeed: function (s) {
    if (s > this.topSpeed) {
      car.speed = this.topSpeed;
    } else if (s < this.topReverseSpeed) {
      car.speed = this.topReverseSpeed;
    } else {
      car.speed = s;
    }
  },
};

// Tema

// Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza in corpul functiei.
// Adauga o proprietate numita topSpeed si asigneaza-i valoarea 160.
// Adauga o proprietate numita topReverseSpeed si asigneaza-i valoarea -50.
// Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza.
// Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare,
// caz in care se folosesc proprietatile topSpeed si topReverseSpeed

// Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h".
console.log(`
  Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.
`);

// Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".
car.decelerate(5);
console.log(`
  Viteza noua este ${car.speed} km/h
`);
