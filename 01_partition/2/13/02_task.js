'use strict';
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?

// 1. Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert(i);
// Ответ: 1, 2, 3, 4
// В состоянии цикла происходит сравнение с уже инкриминированным значением

// 2. Постфиксный вариант i++

let j = 0;
while (j++ < 5) alert(j);
// Ответ: 1, 2, 3, 4, 5
// В состоянии цикла происходит сравнение с предыдущим значением,
// а в alert попадает актуальное значение