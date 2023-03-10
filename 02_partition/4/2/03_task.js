'use strict';
// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:
// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.
// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.


// Решение

let mouse = document.getElementById('mouse');
let isFocused = false;

mouse.tabIndex = 1;

mouse.addEventListener('click', function () {
    mouse.focus();

    isFocused = true;

    mouse.style.position = 'fixed';
});

mouse.addEventListener('blur', function() {
    isFocused = false;
});

mouse.addEventListener('keydown', function (e) {
    if (!isFocused) return;

    let direction = e.key;

    moveMouse(direction);
})

function moveMouse(direction) {
    let mouseMetrics = mouse.getBoundingClientRect();

    if (direction === 'ArrowUp') {
        mouse.style.top = mouseMetrics.top - mouseMetrics.height + 'px';
    }
    if (direction === 'ArrowDown') {
        mouse.style.top = mouseMetrics.top + mouseMetrics.height + 'px';
    }
    if (direction === 'ArrowRight') {
        mouse.style.left = mouseMetrics.left + mouseMetrics.width + 'px';
    }
    if (direction === 'ArrowLeft') {
        mouse.style.left = mouseMetrics.left - mouseMetrics.width + 'px';
    }
}