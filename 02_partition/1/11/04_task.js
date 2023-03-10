'use strict';
// Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости
// от значения свойства position рядом с элементом anchor.

// Аргумент position – строка с одним из 3 значений:
// "top" – расположить elem прямо над anchor
// "right" – расположить elem непосредственно справа от anchor
// "bottom" – расположить elem прямо под anchor

// Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи.
// Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.


/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
    // ... ваш код ...

    let box = anchor.getBoundingClientRect();

    if (position === "top-out") {
        elem.style.top = box.top + window.scrollY - elem.offsetHeight + 'px';
        elem.style.left = box.left + window.scrollX + 'px';
    }

    if (position === "top-in") {
        elem.style.top = box.top + window.scrollY + 'px';
        elem.style.left = box.left + window.scrollX + 'px';
    }

    if (position === "right-out") {
        elem.style.top = box.top + window.scrollY + 'px';
        elem.style.left = box.right + window.scrollX + 'px';
    }

    if (position === "right-in") {
        elem.style.top = box.top + window.scrollY + 'px';
        elem.style.left = box.right + window.scrollX - elem.offsetWidth + 'px';
    }

    if (position === "bottom-out") {
        elem.style.top = box.bottom + window.scrollY + 'px';
        elem.style.left = box.left + window.scrollX + 'px';
    }

    if (position === "bottom-in") {
        elem.style.top = box.bottom + window.scrollY - elem.offsetHeight + 'px';
        elem.style.left = box.left + window.scrollX + 'px';
    }
}

/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-out", "note at the right-out");
showNote(blockquote, "right-in", "note at the right-in");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "bottom-in", "note bottom-in");