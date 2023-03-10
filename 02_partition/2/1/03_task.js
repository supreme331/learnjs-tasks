'use strict';
// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);


// Ответ: сработает сначала alert("1"), затем alert(2), т.к. removeEventListener не удалит alert("1"),
// для удаления слушателя необходимо передать ту же самую функцию.