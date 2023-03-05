'use strict';
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

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
    while (list) {
        console.log('Цикл', list.value);

        list = list.next;
    }
}

printList(list);


// Решение с рекурсией

function printListRecursion(list) {
    console.log('Рекурсия', list.value);
    return list.next ? printListRecursion(list.next) : null;
}

printListRecursion(list);