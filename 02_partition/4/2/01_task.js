'use strict';
// Создайте <div>, который превращается в <textarea>, если на него кликнуть.
// <textarea> позволяет редактировать HTML в элементе <div>.
// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>,
// и его содержимое становится HTML-кодом в <div>.


// Решение

let viewElem = document.getElementById('view');
let textArea = document.createElement('textarea');

textArea.classList.add('edit');
viewElem.after(textArea);
textArea.style.display = 'none';

viewElem.addEventListener('click', function () {
    textArea.value = viewElem.textContent;

    viewElem.style.display = 'none';
    textArea.style.display = 'block';

    textArea.focus();
});

textArea.addEventListener('blur', function () {
    viewElem.textContent = textArea.value;
    textArea.style.display = 'none';
    viewElem.style.display = 'block';
});

textArea.addEventListener("keydown", function (e) {
    if (e.key !== 'Enter') return;
    textArea.blur();
});