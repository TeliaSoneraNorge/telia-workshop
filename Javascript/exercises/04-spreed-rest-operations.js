// rest operation, concatnate object
const obj1 = { name: 'majid' };
const obj2 = { company: 'telia' };

const result = {
  ...obj1,
  ...obj2,
  isItAwesome: true
};

console.log(result);

// rest  operation, concatnate array
const array1 = [1, 2, 3];
const result2 = [...array1, 4, 5, 6];
console.log(result2);

// speard the arguments
const args = ['aaaa', 'bbbb', 'cccc'];
myFunction(...args);
function myFunction(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}