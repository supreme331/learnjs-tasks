'use strict';
// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// Ответ: объект rabbit получит свойство full, т.к. на этот объект будет указывать this при вызове rabbit.eat();