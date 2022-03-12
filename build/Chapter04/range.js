// Сумма диапазона
// Напишите функцию range, котрая принимает два аргумента start и end
// возвращает массив содержащий все числа от start до end
const range = function (start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
function sum(array) {
  let total = 0;
  for (let _i = 0, array_1 = array; _i < array_1.length; _i++) {
    const value = array_1[_i];
    total += value;
  }
  return total;
}
console.log(sum(range(1, 10)));
// console.log()
