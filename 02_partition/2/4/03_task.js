'use strict';
// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
// P.S. Используйте делегирование.

let thumbsListElem = document.getElementById('thumbs');
let largeImageElem = document.getElementById('largeImg');

thumbsListElem.addEventListener('click', function (e) {
    if (!e.target.closest('a').hasAttribute('href')) return;

    e.preventDefault();

    largeImageElem.src = e.target.closest('a').href;
    largeImageElem.alt = e.target.closest('a').title;
})