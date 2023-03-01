'use strict';
// У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

// Решение

function topSalary(salaries) {
    let topSalaryPerson = null;
    let maxSalary = 0;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            topSalaryPerson = name;
        }
    }

    return topSalaryPerson;
}

console.log( topSalary(salaries) ); // Pete