'use strict';
// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }
//
// let a = new A();
// let b = new B();
//
// alert( a == b ); // true

// Ответ: возможно если возвращать из обеих функций один и тот же объект

let someObj = {
    value: 42,
}

function A() {
    return someObj;
}
function B() {
    return someObj;
}

let a = new A();
let b = new B();

console.log( a == b ); // true