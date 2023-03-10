'use strict';
// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
});

arr[2](); // ?

// Ответ: будет выведен массив, с элементами "a", "b" и анонимная функция