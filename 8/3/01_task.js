'use strict';
// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// После этого должен работать такой код:

function f() {
  console.log("Hello!");
}

// Решение

Function.prototype.defer = function (ms) {
  return setTimeout(() => this(), ms);
}

f.defer(1000); // выведет "Hello!" через 1 секунду
f.defer(3000); // выведет "Hello!" через 3 секунды