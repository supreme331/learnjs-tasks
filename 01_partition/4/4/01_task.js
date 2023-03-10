'use strict';
// Здесь функция makeUser возвращает объект.
// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

// Ответ: this у функции makeUser является undefined,
// у undefined нет свойства name, будет ошибка