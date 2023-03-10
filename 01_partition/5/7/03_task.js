'use strict';
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними,
// например, применить метод .push.
// Но это не выходит:

let map = new Map();

map.set("name", "John");

// let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// keys.push("more");

// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?


// Ответ: map.keys() возвращает итерируемый объект, у него отсутствует метод push

const keys = [];

for (let key of map.keys()) {
    keys.push(key);
}

keys.push("more");

console.log('keys', keys);

// Еще вариант воспользоваться Array.from()

const keys2 = Array.from(map.keys())

keys2.push("more");

console.log('keys2', keys2);