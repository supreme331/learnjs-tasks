'use strict';
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

// Решение: алгоритм с возведением матрицы в n-ю степень, является самым быстрым O(log(n)) для вычисления n-го числа
// ряда Фибоначчи
// Также можно решить задачу циклом, но тогда уже будет линейная сложность O(n)

function mul(
    [
        [a1, a2],
        [a3, a4]
    ],
    [
        [b1, b2],
        [b3, b4]
    ]) {
    return [
        [a1 * b1 + a2 * b3, a1 * b2 + a2 * b4],
        [a3 * b1 + a4 * b3, a3 * b2 + a4 * b4]
    ];
}

const matrix = [
    [0, 1],
    [1, 1]
];

const id = [
    [1, 0],
    [0, 1]
];

function fib(n) {
    let result = id;
    const bits = n.toString(2);
    for (const bit of bits) {
        result = mul(result, result);
        if (bit === "1") {
            result = mul(result, matrix);
        }
    }
    return result[1][0];
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757