'use strict';
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:

// function unique(arr) {
//     /* ваш код */
// }

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O

// Решение

function unique(arr) {

    // Наиболее удобное решение
    // return Array.from(new Set(arr));

    const result = [];

    arr.forEach(item => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });

    return result;
}
