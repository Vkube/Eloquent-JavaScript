// The previous chapter introduced the standard function Math.min that returns its smallest argument.
// We can build something like that now.
// Write a function min that takes two arguments and returns their minimum.

function min(num1: number, num2: number): number {
  return num1 < num2 ? num1 : num2;
}
let result = min(0, 10);
console.log(result);
