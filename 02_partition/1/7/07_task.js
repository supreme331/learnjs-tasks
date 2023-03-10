'use strict';
//Напишите функцию createCalendar(elem, year, month).
// Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
// Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>.
// У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>,
// первым днём недели должен быть понедельник.


// Решение

let calendarNode = document.getElementById('calendar');

function createCalendar(elem, year, month) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    thead.innerHTML = `<tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
        </tr>`;
    tbody.innerHTML = '<tr></tr>';

    table.append(thead, tbody);

    let firstDayOfMonth = (new Date(year, month - 1)).getDay();
    let countOfDaysInMonth = (new Date(year, month, 0)).getDate();
    let lastDayInMonth = (new Date(year, month, 0)).getDay();

    for (let i = 1; i < firstDayOfMonth; i++) {
        tbody.firstElementChild.innerHTML += '<td></td>';
    }

    let day = 1;

    while (day <= countOfDaysInMonth) {
        if (tbody.lastElementChild.children.length < 7) {
            tbody.lastElementChild.innerHTML += `<td>${day}</td>`;
            day++;
        }
        if (tbody.lastElementChild.children.length >= 7) {
            tbody.insertAdjacentHTML('beforeend', '<tr></tr>');
            tbody.lastElementChild.insertAdjacentHTML('beforeend', `<td>${day}</td>`);
            day++;
        }
    }

    for (let j = lastDayInMonth; j < 7; j++) {
        tbody.lastElementChild.innerHTML += '<td></td>';
    }

    elem.append(table);
}

createCalendar(calendarNode, 2023, 3);