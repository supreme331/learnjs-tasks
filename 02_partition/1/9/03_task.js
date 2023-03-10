'use strict';
// Поместите мяч в центр поля
// Каковы координаты центра поля?
// Элемент должен позиционироваться за счёт JavaScript, а не CSS.
// Код должен работать с любым размером мяча (10, 20, 30 пикселей)
// и любым размером поля без привязки к исходным значениям.


// Решение

let field = document.getElementById('field');
let ball = document.getElementById('ball');

let centerX = field.clientWidth / 2;
let centerY = field.clientHeight / 2;

ball.style.left = (centerX - (ball.offsetWidth / 2)) + 'px';
ball.style.top = (centerY - (ball.offsetHeight / 2)) + 'px';
