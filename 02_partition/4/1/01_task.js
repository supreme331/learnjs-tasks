'use strict';
// Используя JavaScript:
// 1. Выведите значение и текст выбранного пункта.
// 2. Добавьте пункт: <option value="classic">Классика</option>.
// 3. Сделайте его выбранным.


// Решение

let selectElem = document.getElementById('genres');

// 1. Выведите значение и текст выбранного пункта.
alert(`Value: ${selectElem.value}, text: ${selectElem.options[selectElem.selectedIndex].text}`);

// 2. Добавьте пункт: <option value="classic">Классика</option>.
selectElem.append(new Option('Классика', 'classic'));

// 3. Сделайте его выбранным.
selectElem.value = 'classic';