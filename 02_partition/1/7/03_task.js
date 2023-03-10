'use strict';
// В примере ниже вызов table.remove() удаляет таблицу из документа.
// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
// Почему так происходит?

// <table id="table">
//   aaa
//   <tr>
//     <td>Тест</td>
//   </tr>
// </table>
//
// <script>
//   alert(table); // таблица, как и должно быть
//
//   table.remove();
//   // почему в документе остался текст "ааа"?
// </script>


// Ответ: в таблице могут храниться только табличные теги, браузер при парсинге страницы перемещает текстовую ноду
// за пределы таблицы и когда таблица удаляется, текстовая нода остается.