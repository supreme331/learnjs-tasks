'use strict';
// Напишите JS-код, реализующий поведение «подсказка».
// При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка
// и скрываться при переходе на другой элемент.
//В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст.
// То есть, в них нет вложенных тегов (пока).

// Детали оформления:
// Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
// Подсказка должна быть, по возможности, посередине элемента.
// Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена,
// если нельзя показать сверху – показывать снизу элемента.
// Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.

// Для решения вам понадобятся два события:
// mouseover срабатывает, когда указатель мыши заходит на элемент.
// mouseout срабатывает, когда указатель мыши уходит с элемента.
// Примените делегирование событий: установите оба обработчика на элемент document,
// чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip
// и управлять подсказками с их же помощью.
// После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.
// P.S. В один момент может быть показана только одна подсказка.


// Решение

let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

document.addEventListener('mouseover', function (e) {
    if (!e.target.dataset.tooltip) return;

    if (e.target.dataset.tooltip === "эта подсказка должна быть длиннее, чем элемент") {
        showTooltip(e.target, "эта подсказка должна быть длиннее, чем элемент");
    }

    if (e.target.dataset.tooltip === "HTML<br>подсказка") {
        showTooltip(e.target, "HTML<br>подсказка");
    }
})

document.addEventListener('mouseout', function (e) {
    if (e.target.dataset.tooltip) hideTooltip();
})

function showTooltip(target, hint) {
    let btnMetrics = target.getBoundingClientRect();

    tooltip.textContent = hint;

    target.before(tooltip);

    let tooltipMetrics = tooltip.getBoundingClientRect();

    let top = btnMetrics.top > 5 + tooltipMetrics.height ? btnMetrics.top - (5 + tooltipMetrics.height)
        : btnMetrics.bottom + 5;

    let left = (btnMetrics.left + (btnMetrics.width / 2) - (tooltipMetrics.width / 2)) > 0
        ? btnMetrics.left + (btnMetrics.width / 2) - (tooltipMetrics.width / 2) : 0;

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
}

function hideTooltip() {
    tooltip.remove();
}