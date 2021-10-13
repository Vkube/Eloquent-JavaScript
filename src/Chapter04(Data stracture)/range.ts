//Сумма диапазона

//Напишите функцию range, котрая принимает два аргумента start и end
// возвращает массив содержащий все числа от start до end

const range = (start: number, end: number): number[] => {
  const arr: number[] = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
function sum(array: number[]): number {
  let total: number = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}
console.log(range(1, 10));
