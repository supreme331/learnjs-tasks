'use strict';
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.


// Решение с setInterval

// function printNumbersInterval(from, to) {
//   let current = from;
//
//   let timerId = setInterval(() => {
//     if (current > to) {
//       clearInterval(timerId);
//     } else {
//       console.log(current++);
//     }
//   }, 1000)
// }
//
// printNumbersInterval(3, 9);


// Решение с setTimeout

function printNumbersTimeout(from, to) {
  let current = from;

  let timerId = setTimeout(function print() {
    if (current > to) {
      clearTimeout(timerId);
    } else {
      console.log(current++);
      timerId = setTimeout(print, 1000)
    }
  }, 1000)
}

printNumbersTimeout(3, 9);