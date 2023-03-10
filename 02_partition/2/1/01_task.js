'use strict';
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

let text = document.getElementById('text');
let button = document.getElementById('hider');

button.addEventListener('click', () => text.style.display = 'none');