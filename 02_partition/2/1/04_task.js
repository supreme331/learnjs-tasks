'use strict';
// Передвиньте мяч по полю

// Требования:
// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;

// Заметки:
// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.


// Решение

let field = document.getElementById('field');
let ball = document.getElementById('ball');

field.addEventListener('click', moveBall);

function moveBall(e) {
    let fieldCoords = field.getBoundingClientRect();

    let ballX = e.clientX + field.clientLeft - fieldCoords.x - ball.offsetWidth;
    let ballY = e.clientY + field.clientTop - fieldCoords.y - ball.offsetHeight;

    if (ballX < 0) ballX = 0;
    if (ballX > field.clientWidth - ball.offsetWidth) ballX = field.clientWidth - ball.offsetWidth;
    if (ballY < 0) ballY = 0;
    if (ballY > field.clientHeight - ball.offsetHeight) ballY = field.clientHeight - ball.offsetHeight;

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}