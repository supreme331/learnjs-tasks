'use strict';
// Почему в коде ниже return false не работает?

// <script>
//     function handler() {
//     alert("...");
//     return false;
// }
// </script>
//
// <a href="https://w3.org" onClick="handler()">браузер откроет w3.org</a>


// Ответ: return false при вызове через onClick создается функция обертка, которая ничего не возвращает.
// Необходимо вернуть запуск функции onClick="return handler()", которая в свою очередь возвращает false