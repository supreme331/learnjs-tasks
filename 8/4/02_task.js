'use strict';
// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

// Ответ:

rabbit.sayHi(); // Результат вызова будет "Rabbit", т.к. в контексте объекта rabbit запускается функция sayHi

// В оставшихся 3-х вызовах функция sayHi запускается в контексте функции конструктора, в которой this.name
// равен undefined
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

