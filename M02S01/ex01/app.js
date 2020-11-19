class Car {
  topReverseSpeed = -50;

  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 160;
    this.isTrunkOpen = false;
    this.areLightsOn = false;
  }

  accelerate() {
    this.speed++;
  }

  deccelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    }
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 3000);
  }
}

let audi = new Car('Audi', 'black', 4, 50);

console.warn(`
  Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3).
  O poti salva intr-o variabila numita opel.
`);
let opel = new Car('Opel', 'red', 4, 3);

console.warn(`
  Adauga o metoda numita stop() care sa faca proprietatea speed 0,
  apoi afiseaza viteza.
`);

// Tema
// 6. Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
// 7. Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe true, respectiv false.
// 8. Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// 9. Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// 10. Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind metoda window.setTimeout().
// 11. Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])
// 12. Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
// “Masina era marca make si se deplasa cu speed km/h”
// In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed km/h” (setSpeed(car.speed - 5))

const cars = [audi, opel];

cars.forEach((car) => {
  console.log(`
    Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.
  `);

  car.setSpeed(car.speed - 5);
  console.log(`
    Viteza noua este ${car.speed} km/h
  `);
});
