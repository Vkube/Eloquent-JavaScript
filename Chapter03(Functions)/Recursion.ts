// Определите рекурсивную функцию isEven, соответствующую этому опи­
// санию. Функция должна принимать один параметр (положительное целое
// число) и возвращать логическое значение.

function isEven(num1:number):boolean {
    if (num1 == 0) return true;
    else if (num1 == 1) return false;
    else if (num1 < 0) return isEven(-num1);
    else return isEven(num1 - 2);
}

let result = isEven(50);
let resultForNum= isEven(75);

console.log(result,resultForNum);