'use strict';
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.


function makeCounter() {

  function counter() {
    return ++counter.count;
  }

  counter.count = 0;

  counter.set = function (value) {
    counter.count = value;
  }

  counter.decrease = function () {
    counter.count -= 1;
  }

  return counter;
}

let counter = makeCounter();

// изначально count = 0
console.log(counter()); // возвращаем следующее значение count = 1
console.log(counter()); // еще раз, count = 2

counter.set(5); // установили значение count = 5

console.log(counter()); // возвращаем следующее значение count = 6

counter.decrease(); // уменьшаем счетчик на 1, count = 5
counter.decrease(); // уменьшаем счетчик на 1, count = 4

console.log(counter()); // возвращаем следующее значение count = 5