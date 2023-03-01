'use strict';
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
// потом переделайте всё как нужно и методом join соедините обратно.

// Решение

function camelize(str) {
    return str.split('-').reduce((acc, item, index) =>
            index === 0 ? item : acc + item[0].toUpperCase() + item.slice(1), '');
}

console.log( camelize("background-color") ); // 'backgroundColor';
console.log( camelize("list-style-image") ); // 'listStyleImage';
console.log( camelize("-webkit-transition") ); // 'WebkitTransition';