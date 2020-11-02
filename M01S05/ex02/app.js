function calculateRectangleArea(L, l) {
  return L * l;
}

console.warn(`Folosind functia calculateRectangleArea()
afiseaza suprafata unui dreptunghi de 4 pe 3
`);
console.log(calculateRectangleArea(4, 3));

console.warn(`
Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3,
respectiv 3 pe 2. Foloseste variabile.
`);
let rectangleSurface1 = calculateRectangleArea(5, 3);
let rectangleSurface2 = calculateRectangleArea(3, 2);
console.log(rectangleSurface1 + rectangleSurface2);

console.warn(`
Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.
`);
let squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

console.warn(`
  Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9
`);
let squareSurface2 = calculateRectangleArea(12, 9);
console.log(squareSurface2);

console.warn(`
  Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,
  8 pe 9, respectiv 10 pe 5. Foloseste variabile.
`);
let rectangles = [
  {
    width: 15,
    height: 31,
  },
  {
    width: 8,
    height: 9,
  },
  {
    width: 10,
    height: 5,
  },
];

let rectanglesSum = 0;

rectangles.forEach((rectangle) => {
  rectanglesSum += calculateRectangleArea(rectangle.width, rectangle.height);
});
console.log(rectanglesSum);

console.warn(`
  Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.
`);
let anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);
