'use strict';
// Странный instanceof.
// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

// function A() {}
// function B() {}

// A.prototype = B.prototype = {};

// let a = new A();

// alert( a instanceof B ); // true


// Ответ: так происходит потому, что прототипы A и B равны друг другу, а instanceof проверяет на соответствие в
// цепочке прототипов.