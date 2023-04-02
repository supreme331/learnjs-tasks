'use strict';
// Ошибка в setTimeout.
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);


// Ответ: блок catch не обработает ошибку, т.к. она генерируется после того как отработает цепочка промиса.