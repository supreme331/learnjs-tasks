'use strict';
// Класс расширяет объект?
// Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта,
// например hasOwnProperty.

// Пример:
// class Rabbit {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
// alert( rabbit.hasOwnProperty('name') ); // true
// Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться
// от обычного "class Rabbit"?

// В чем разница?
// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

// class Rabbit extends Object {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let rabbit = new Rabbit("Кроль");
// alert( rabbit.hasOwnProperty('name') ); // Ошибка


// Решение

class Rabbit extends Object {
    constructor(name) {
        super(); // необходимо добавить метод super
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");
console.log(rabbit.hasOwnProperty('name'));

// Разница объявления class Rabbit и class Rabbit extends Object в том,
// что наследование от Object запишет в Rabbit.__proto__ этот Object,
// таким образом добавив к Rabbit статические методы и свойства Object