'use strict';
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

// Решение

function getWeekDay(date) {
    let day = date.getDay();

    return day === 0 ? 'ВС'
        : day === 1 ? 'ПН'
            : day === 2 ? 'ВТ'
                : day === 3 ? 'СР'
                    : day === 4 ? 'ЧТ'
                        : day === 5 ? 'ПТ'
                            : day === 6 ? 'СБ'
                                : null;
}

console.log(getWeekDay(date));