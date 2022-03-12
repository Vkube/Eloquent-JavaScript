// Определите рекурсивную функцию isEven, соответствующую этому опи­
// санию. Функция должна принимать один параметр (положительное целое
// число) и возвращать логическое значение.
function isEven(num1) {
  if (num1 == 0) return true;
  if (num1 == 1) return false;
  if (num1 < 0) return isEven(-num1);
  return isEven(num1 - 2);
}
const result = isEven(50);
const resultForNum = isEven(75);
console.log(result, resultForNum);

module.exports = isEven;
