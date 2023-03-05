'use strict';
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

// Решение циклом

function printList(list) {
    const values = [];

    while (list) {
        values.push(list.value);

        list = list.next;
    }

    values.reverse().forEach(value => console.log('Цикл', value));
}

printList(list);


// Решение с рекурсией

function printReverseListRecursion(list) {
    list.next ? printReverseListRecursion(list.next) : null;

    console.log('Рекурсия', list.value);
}

printReverseListRecursion(list);