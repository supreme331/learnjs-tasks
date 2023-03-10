'use strict';
// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.


// Решение

let removeBtn = document.createElement('button');
let cards = document.querySelectorAll('.pane');

removeBtn.textContent = '[x]';
removeBtn.classList.add('remove-button');

for (let i = 0; i < cards.length; i++) {
    let removeBtnCopy = removeBtn.cloneNode(true);

    removeBtnCopy.addEventListener('click', function () {
        removeBtnCopy.parentElement.remove();
    })

    cards[i].prepend(removeBtnCopy);
}