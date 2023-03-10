'use strict';
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

// Решение

function aclean(arr) {
  const map = new Map(arr.map(word => [word.toLowerCase().split('').sort().join(''), word]));
  console.log(map.keys())
  return Array.from(map.values());
}