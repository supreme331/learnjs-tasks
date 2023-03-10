'use strict';
// Что выведет этот код?
//
// <script>
//   let body = document.body;
//
//   body.innerHTML = "<!--" + body.tagName + "-->";
//
//   alert( body.firstChild.data ); // что выведет?
// </script>


// Ответ: alert выведет содержание комментария "BODY", tagName для HTML документов возвращается в верхнем регистре