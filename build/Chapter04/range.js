//Сумма диапазона
//Напишите функцию range, котрая принимает два аргумента start и end
// возвращает массив содержащий все числа от start до end
var range = function (start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};
function sum(array) {
    var total = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        total += value;
    }
    return total;
}
console.log(sum(range(1, 10)));
//console.log()