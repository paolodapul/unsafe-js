// as unknown as <type> can force TypeScript to accept unsafe transformations
let payment = "100" as unknown as number;
// console.log(payment.toFixed(2)); // TypeError: payment.toFixed is not a function

// Solution: proper type casting
let payment2 = Number("100");
console.log(payment2.toFixed(2));
