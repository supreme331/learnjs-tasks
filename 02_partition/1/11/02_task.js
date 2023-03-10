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

    if (position === "top") {
        elem.style.top = box.top - elem.offsetHeight + 'px';
        elem.style.left = box.left + 'px';
    }

    if (position === "right") {
        elem.style.top = box.top + 'px';
        elem.style.left = box.right + 'px';
    }

    if (position === "bottom") {
        elem.style.top = box.bottom + 'px';
        elem.style.left = box.left + 'px';
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

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");