'use strict';
// Что выведет этот код?
//
// <html>
//
// <body>
//   <script>
//     alert(document.body.lastChild.nodeType);
//   </script>
// </body>
//
// </html>

// Ответ: в момент срабатывания скрипта последней дочерней нодой в body будет script,
// соответственно alert выведет 1.