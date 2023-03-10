'use strict';
// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
// Укажите хотя бы 3 отличия, лучше – больше.

// Ответ: elem.clientWidth не зависит от css свойства box-sizing,
// elem.clientWidth не учитывает ширину полосы прокрутки при ее наличии,
// elem.clientWidth всегда возвращает численное значение, css свойства не всегда представлены в виде конкретных пикселей