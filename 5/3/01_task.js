'use strict';
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

// Решение

function ucFirst(str) {
    return str ? str[0].toUpperCase() + str.slice(1) : str;
}

console.log( ucFirst("") );
console.log( ucFirst("вася") );