'use strict';
// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков
// Требования:
// Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.


//Решение

let tree = document.getElementById('tree');
let treeItems = document.querySelectorAll('li');

for (let i = 0; i < treeItems.length; i++) {
    treeItems[i].classList.add('tree__item');

    let span = document.createElement('span');
    span.textContent = treeItems[i].childNodes[0].textContent;
    treeItems[i].childNodes[0].remove();

    treeItems[i].prepend(span);
}

tree.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        if (!e.target.nextElementSibling) return;
        e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden;
    }
})