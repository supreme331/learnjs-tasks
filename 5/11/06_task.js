'use strict';
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)

// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// Решение

function  getSecondsToday() {
    let today = new Date();

    today.setHours(0, 0, 0, 0);

    return Math.floor((new Date() - today) / 1000);
}

console.log(getSecondsToday());