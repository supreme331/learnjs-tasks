'use strict';
// Есть дерево, организованное в виде вложенных списков ul/li.
// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов.
// Узлы нижнего уровня, без детей – пропускайте.


// Решение

let listItems = document.querySelectorAll('li');

for (const li of listItems) {
    if(li.children.length) {
        li.firstChild.textContent += `[${li.querySelectorAll('li').length}]`;
    }
}