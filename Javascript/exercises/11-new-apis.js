/*

Include, 
Array.from
repeat
fill
Object.assign()

*/

const sentence = 'It was the best of times. It was the worst of times';
const result = sentence.includes('best of times');
const repeated = 'abc123';
const result = repeated.repeat(4);
const obj = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
// this is even more handy with a NodeList like that returned from document.querySelector
const result = Array.from(obj);
const originalArray = new Array(5);
const result = originalArray.fill(3, 1);

const source1 = {
  a: {
    b: 'c',
    m: [1, 2, 3]
  }
};
const source2 = {
  d: false,
  z: 34
};
const source3 = {
  z: 42,
  p: ['a', 'b', 'c']
};

const target = {
  a: {
    q: 'r',
    m: [4, 5, 6],
    s: {
      t: 3
    }
  },
  d: true,
  p: ['x', 'y', 'z']
};
const result = Object.assign(target, source1, source2, source3);
