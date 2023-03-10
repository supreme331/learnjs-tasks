'use strict';
// Вот документ с таблицей и формой.
//
// Откройте страницу https://learn.javascript.ru/task/find-elements/table.html
// в отдельном окне и используйте для этого браузерные инструменты разработчика.

// Как найти?…

// 1. Таблицу с id="age-table".
let ageTable = document.getElementById('age-table');

// 2. Все элементы label внутри этой таблицы (их три).
let ageTableLabels = ageTable.querySelectorAll('label');

// 3. Первый td в этой таблице (со словом «Age»).
let ageCell = ageTable.rows[0].cells[0];

// 4. Форму form с именем name="search".
let searchForm = document.querySelector('form[name="search"]');

// 5. Первый input в этой форме.
let searchFormInputs = searchForm.querySelectorAll('input');
let textInput = searchFormInputs[0];

// 6. Последний input в этой форме.
let searchBtn = searchFormInputs[searchFormInputs.length - 1];