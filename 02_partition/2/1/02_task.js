'use strict';
// Создайте кнопку, которая будет скрывать себя по нажатию.

let btn = document.createElement('button');
btn.textContent = 'Нажмите, чтобы спрятать эту кнопку';
btn.addEventListener('click', function() {
    this.style.display = 'none'
})

document.body.append(btn);



