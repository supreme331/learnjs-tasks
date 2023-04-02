'use strict';
// Наследование от SyntaxError.
// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.
// Класс должен поддерживать свойства message, name и stack.

// Пример использования:

// let err = new FormatError("ошибка форматирования");

// alert( err.message ); // ошибка форматирования
// alert( err.name ); // FormatError
// alert( err.stack ); // stack
// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)


// Решение

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = 'FormatError';
    }
}

let err = new FormatError("ошибка форматирования");

console.log(err.message);
console.log(err.name);
console.log(err.stack);
console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);