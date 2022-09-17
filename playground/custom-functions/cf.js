// prettier-ignore

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
//   console.log(billAmount, taxRate);
  console.log('Running Calculate Bill');
  const total = billAmount  + billAmount *  taxRate + billAmount * tipRate;
  return total;
}

const alexTotal = 500;
const alexTaxRate = 0.3;
// const myTotal = calculateBill(alexTotal, alexTaxRate);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Alex');
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
