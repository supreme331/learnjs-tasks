'use strict';
// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.


// Решение

document.addEventListener('click', function (e) {
    if (e.target.className === 'remove-button') {
        let card = e.target.closest('.pane');
        card.remove();
    }
})