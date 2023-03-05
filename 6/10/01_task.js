'use strict';
// Что выведет функция?

function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

// Ответ: null, в объекте user для функции f мы привязали в качестве контекста null