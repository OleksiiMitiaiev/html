
const a = 1;
const b = 34;
const total = add(a, b); // вызов функции add с аргументами a и b
console.log(total); // вывод результата

function add(num1, num2) {
    const sum = num1 + num2; // вычисляем сумму
    return sum; // возвращаем сумму
}
