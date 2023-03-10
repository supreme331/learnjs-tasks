'use strict';
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов
// в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

// Пример кода:

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
// P.S. Аргументы и контекст this, переданные в f1000, должны быть переданы в оригинальную f.


// Решение

function throttle(func, ms) {
  let lastCall = null;
  let timerId = null;

  return function (...args) {
    if (lastCall === null) {
      // Первый запуск

      lastCall = Date.now()
      return func.apply(this, args);
    } else if ( timerId === null && (lastCall + ms) > Date.now() ) {
      // Не истекло время задержки, устанавливаем отсроченный вызов функции, на случай если он последний

      timerId = setTimeout(() => func.apply(this, args), (Date.now() - lastCall));
    } else if ( timerId && (lastCall + ms) > Date.now() ) {
      // Не истекло время задержки, при этом перезаписываем вызов функции с актуальными аргументами

      clearTimeout(timerId);
      timerId = setTimeout(() => func.apply(this, args), (Date.now() - lastCall));
    }
  }
}