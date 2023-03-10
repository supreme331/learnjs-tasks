'use strict';
// Сортировка таблицы
// В ней может быть больше строк.
// Напишите код для сортировки по столбцу "name".

let table = document.querySelector('table');
let theadTitlesElements = table.querySelector('thead').rows[0];

for (let i = 0; i < theadTitlesElements.cells.length; i++) {
    theadTitlesElements.cells[i].addEventListener('click', () =>
        sortTable(table, theadTitlesElements.cells[i].textContent))
}

function sortTable(table, sortBy) {
    let sortHints = {
        Name: 0,
        Surname: 1,
        Age: 2,
    };

    let tbody = table.querySelector('tbody');
    let sorted = [];

    if (sortBy === 'Name' || sortBy === 'Surname') {
        sorted = Array.from(tbody.rows).sort((a, b) => {
            if (a.cells[sortHints[sortBy]].textContent > b.cells[sortHints[sortBy]].textContent) return 1;
            if (a.cells[sortHints[sortBy]].textContent < b.cells[sortHints[sortBy]].textContent) return -1;
        });
    }

    if (sortBy === 'Age') {
        sorted = Array.from(tbody.rows).sort((a, b) => {
            return a.cells[sortHints[sortBy]].textContent - b.cells[sortHints[sortBy]].textContent;
        });
    }

    tbody.innerHTML = '';
    tbody.append(...sorted);
}