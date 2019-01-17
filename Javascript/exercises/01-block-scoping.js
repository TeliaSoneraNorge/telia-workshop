// console.log(company);
// console.log(name);
// console.log(isBestName);

// Declare name using 'let'
// Declare isBestName using 'const'
let name = 'majid';
const isBestName = true;

// Immutable vs Mutable
name = 'changed majid';
// isBestName = false;

// var and hoisting
var company = 'Telia';

// Block scope
let i = 0;
while (i < 1) {
  i++;
  const name = 'MAJID_SCOPED';
  if (true) {
    const name = 'SOMETHING';
  }
  console.log(name);
}

console.log(name);
