//Напишите две функции reverseArray и reverseArrayInPlace
// Первая функция reverseArray принимает массив в качестве аргумента и создает новый массив, содержащий те же элементы в обратном порядке.
//Вторая reverseArrayInPlace делает то же самое что и метод reverse.

const reverseArray = (array) => {
  let newArr = [];

  for (let i = array.length - 1; i < 0; i--) {
    newArr.push(i);
  }
  return newArr;
};

const reverseArrayInPlace = () => {};

console.log(reverseArray(["A", "B", "C"]));
