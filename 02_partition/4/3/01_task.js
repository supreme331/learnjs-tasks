'use strict';
// Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать,
// какая это будет сумма через заданный промежуток времени.
// Любое изменение введённых данных должно быть обработано немедленно.
// Формула:
// let result = Math.round(initial * (1 + interest) ** years);

let form = document.forms.calculator;
let resultDiagramElem = document.getElementById('height-after');
let moneyBeforeElem = document.getElementById('money-before');
let moneyAfterElem = document.getElementById('money-after');

form.addEventListener('change', calculate);

function calculate() {
    let initial = form.money.value;
    let years = form.months.value / 12;
    let interest = form.interest.value / 100;
    let result = Math.round(initial * (1 + interest) ** years);

    resultDiagramElem.style.height = result / initial * 100 + 'px';
    moneyBeforeElem.textContent = initial;
    moneyAfterElem.textContent = result;
}

calculate();