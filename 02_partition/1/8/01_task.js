'use strict';
// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification">
// с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
// Пример объекта options:

// showNotification({
//     top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//     right: 10, // 10px от правого края окна (по умолчанию 0px)
//     html: "Hello!", // HTML-уведомление
//     className: "welcome" // дополнительный класс для div (необязательно)
// });

// Используйте CSS-позиционирование для отображения элемента в заданных координатах.
// Исходный документ имеет необходимые стили.

// Решение

function showNotification(options) {
    let div = document.createElement('div');

    div.className = 'notification';
    div.style.cssText = `
    top: 10px;
    right: 10px;`;

    div.innerHTML = options.html;
    div.classList.add('welcome');

    document.body.append(div);

    setTimeout(() => div.remove() , 1500);
}


let i = 1;
setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
    });
}, 2000);