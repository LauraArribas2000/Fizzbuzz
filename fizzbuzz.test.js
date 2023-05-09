const fizzbuzz = require('./fizzbuzz');

let multiple3 = [
   3,  6,  9, 12, 18, 21, 24, 27,
  33, 36, 39, 42, 48, 51, 54, 57,
  63, 66, 69, 72, 78, 81, 84, 87,
  93, 96, 99
];

for (let i = 0; i < multiple3.length; ++i){
  test('Fizzbuzz de ' + multiple3[i] + ' es igual a Fizz', () => {
    expect(fizzbuzz(multiple3[i])).toBe('Fizz');
  });
}

let multiple5 = [
   5,  10, 20, 25, 35, 40,
  50,  55, 65, 70, 80, 85,
  95, 100
];

for (let i = 0; i < multiple5.length; ++i) {
  test('Fizzbuzz de ' + multiple5[i] + ' es igual a Buzz', () => {
    expect(fizzbuzz(multiple5[i])).toBe('Buzz');
  });
}
  
let multiple15 = [ 
  15, 30, 45, 60, 75, 90 
];
  
for (let i = 0; i < multiple15.length; i++) {
  test('Fizzbuzz de ' + multiple15[i] + ' es igual a FizzBuzz', () => {
    expect(fizzbuzz(multiple15[i])).toBe('FizzBuzz');
  });
}

let num = [
   1,  2,  4,  7,  8, 11, 13, 14, 16, 17, 19, 22,
  23, 26, 28, 29, 31, 32, 34, 37, 38, 41, 43, 44,
  46, 47, 49, 52, 53, 56, 58, 59, 61, 62, 64, 67,
  68, 71, 73, 74, 76, 77, 79, 82, 83, 86, 88, 89,
  91, 92, 94, 97, 98
];

for (let i = 0; i < num.length; i++) {
  test('Fizzbuzz de ' + num[i] + ' es igual a ' + num[i], () => {
  expect(fizzbuzz(num[i])).toBe(num[i]);
  });
}
