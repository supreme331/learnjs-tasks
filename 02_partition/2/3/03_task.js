'use strict';
// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы
// должны сортироваться по соответствующему столбцу.
// Каждый элемент <th> имеет атрибут data-type:

// В примере первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать,
// ведь числа сортируются иначе, чем строки.
// Сортировка должна поддерживать только типы "string" и "number".
// P.S. Таблица может быть большой, с любым числом строк и столбцов.


// Решение

let table = document.querySelector('table');
let theadTitleElements = table.querySelector('thead').rows[0];

table.addEventListener('click', function (e) {
    if (!e.target.dataset.type) return;

    sortTable(table, e.target.dataset.type);
})

function sortTable(table, sortBy) {
    let sortHints = {
        [theadTitleElements.cells[0].dataset.type]: 0, // Возраст
        [theadTitleElements.cells[1].dataset.type]: 1, // Имя
    };

    let tbody = table.querySelector('tbody');
    let sorted = [];

    if (sortBy === 'string') {
        sorted = Array.from(tbody.rows).sort((a, b) => {
            if (a.cells[sortHints[sortBy]].textContent > b.cells[sortHints[sortBy]].textContent) return 1;
            if (a.cells[sortHints[sortBy]].textContent < b.cells[sortHints[sortBy]].textContent) return -1;
        });
    }

    if (sortBy === 'number') {
        sorted = Array.from(tbody.rows).sort((a, b) => {
            return a.cells[sortHints[sortBy]].textContent - b.cells[sortHints[sortBy]].textContent;
        });
    }

    tbody.innerHTML = '';
    tbody.append(...sorted);
}