'use strict';
// Для страницы:
//
// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…
//
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

let divElem = document.body.firstElementChild;
let ulElem = document.body.lastElementChild;
let secondLiElem = ulElem.lastElementChild;