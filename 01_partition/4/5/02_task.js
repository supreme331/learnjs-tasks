'use strict';
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Решение

function Calculator() {
    this.read = function() {
        this.a = +prompt('Введите первое число', '');
        this.b = +prompt('Введите второе число', '');
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}