// Напишите две функции reverseArray и reverseArrayInPlace
// Первая функция reverseArray принимает массив в качестве аргумента и создает новый массив, содержащий те же элементы в обратном порядке.
// Вторая reverseArrayInPlace делает то же самое что и метод reverse.
const reverseArray = function (array) {
  const newArr = [];
  for (let i = array.length - 1; i < 0; i--) {
    newArr.push(i);
  }
  return newArr;
};
console.log(reverseArray([1002, 2232, 22323, 34]));
