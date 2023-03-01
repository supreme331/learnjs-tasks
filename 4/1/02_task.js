'use strict';
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false

// Решение

function isEmpty(obj) {
    let counter = 0;

    for (const key in obj) {
        counter++;
    }

    return !counter;
}