'use strict';
// Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.
// В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.

// Ваш код должен при помощи DOM получить четыре пары координат:
// 1. верхний левый, внешний угол (это просто).
// 2. нижний правый, внешний угол (тоже просто).
// 3. верхний левый, внутренний угол (чуть сложнее).
// 4. нижний правый, внутренний угол (есть несколько способов, выберите один).
// Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

// P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.


// Решение

let field = document.getElementById('field');
let coordsNode = document.getElementById('coords');
let box = field.getBoundingClientRect();

// 1. верхний левый, внешний угол (это просто).
let upperLeftOuterCornerCoords = {
    x: box.left + window.scrollX,
    y: box.top + window.scrollY
}

// 2. нижний правый, внешний угол (тоже просто).
let lowerRightOuterCornerCoords = {
    x: box.right + window.scrollX,
    y: box.bottom + window.scrollY
}

// 3. верхний левый, внутренний угол (чуть сложнее).
let upperLeftInnerCornerCoords = {
    x: box.left + window.scrollX + field.clientLeft,
    y: box.top + window.scrollY + field.clientTop
}

// 4. нижний правый, внутренний угол (есть несколько способов, выберите один).
let lowerRightInnerCornerCoords = {
    x: box.right + window.scrollX - field.clientLeft,
    y: box.bottom + window.scrollY - field.clientTop
}

coordsNode.innerHTML = `
<div>1. верхний левый, внешний угол (это просто). 
<b>${upperLeftOuterCornerCoords.x}:${upperLeftOuterCornerCoords.y}</b></div>
<div>2. нижний правый, внешний угол (тоже просто). 
<b>${lowerRightOuterCornerCoords.x}:${lowerRightOuterCornerCoords.y}</b></div>
<div>3. верхний левый, внутренний угол (чуть сложнее). 
<b>${upperLeftInnerCornerCoords.x}:${upperLeftInnerCornerCoords.y}</b></div>
<div>4. нижний правый, внутренний угол (есть несколько способов, выберите один). 
<b>${lowerRightInnerCornerCoords.x}:${lowerRightInnerCornerCoords.y}</b></div>
`;