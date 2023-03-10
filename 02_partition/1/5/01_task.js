'use strict';
// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:

// 1. Какой в нём текст (без поддерева) ?
// 2. Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?

// Решение

let listItems = document.querySelectorAll('li');

for (const li of listItems) {
    alert(`${li.firstChild.textContent.trim()}: ${li.getElementsByTagName('li').length}`);
}


