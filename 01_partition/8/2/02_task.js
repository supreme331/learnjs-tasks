'use strict';
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно,
// но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();

// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.


// Пример рабочей функции-конструктора

function Animal(name) {
  this.name = name;
  this.sleep = function () {
    console.log(`${this.name} is sleeping`);
  }
}

let dog = new Animal('Sharik');
dog.sleep();

let cat = new dog.constructor('Murzik');
cat.sleep();

// Пример нерабочей функции-конструктора

// function Animal(name) {
//   this.name = name;
//   this.sleep = function () {
//     console.log(`${this.name} is sleeping`);
//   }
// }
//
// Animal.prototype = {}
//
// let dog = new Animal('Sharik');
// dog.sleep();
//
// let cat = new dog.constructor('Murzik');
// cat.sleep();