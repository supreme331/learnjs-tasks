'use strict';
// Создать меню, которое по нажатию открывается либо закрывается:
// P.S. HTML/CSS исходного документа можно и нужно менять.

// Решение

let pushMeElem = document.getElementById('push-me');
let list = document.querySelector('ul');

pushMeElem.addEventListener('click', function () {
    pushMeElem.classList.toggle('open');
    list.classList.toggle('open');
})