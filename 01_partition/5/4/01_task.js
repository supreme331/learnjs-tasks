'use strict';
// Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

// Ответ: в переменную shoppingCart была скопирована ссылка на объект(массив) в памяти,
// после добавления нового элемента в массив, он изменился по обеим ссылкам, так как является одним объектом в памяти,
// следовательно alert( fruits.length ) покажет длину массива в 4 элемента.