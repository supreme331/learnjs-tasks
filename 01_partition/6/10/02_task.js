'use strict';
// Можем ли мы изменить this дополнительным связыванием?
// Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();

// Ответ: нет bind не перепривязывается, функция выведет "Вася"