'use strict';
// Сделайте ячейки таблицы редактируемыми по клику.

// По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML.
// Изменение размера ячейки должно быть отключено.
// Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования»,
// клики по другим ячейкам игнорируются.
// Таблица может иметь множество ячеек. Используйте делегирование событий.


// Решение

let table = document.getElementById('bagua-table');
let form = document.createElement('form');
let textarea = document.createElement('textarea');
let applyBtn = document.createElement('button');
let cancelBtn = document.createElement('button');
let buttonsBlockElem = document.createElement('div');
let initialCellHTML = '';
let isEditing = false;

applyBtn.classList.add('apply-btn');
cancelBtn.classList.add('cancel-btn');

applyBtn.textContent = 'Применить';
cancelBtn.textContent = 'Отменить';

buttonsBlockElem.append(applyBtn, cancelBtn);
form.append(textarea, buttonsBlockElem);

table.addEventListener('click', function (e) {

    if (e.target.tagName === 'TEXTAREA') return;
    if (!e.target.closest('td')) return;

    if (!isEditing) {
        isEditing = true;

        let target = e.target.closest('td');
        let targetMetrics = target.getBoundingClientRect();

        initialCellHTML = target.innerHTML;
        textarea.value = initialCellHTML;

        target.innerHTML = '';
        target.append(form);

        textarea.style.height = targetMetrics.height + 'px';
        textarea.style.width = targetMetrics.width + 'px';

        textarea.focus();
    }

    if (isEditing) {
        if (e.target.className === 'apply-btn') {
            let target = e.target.closest('td');
            target.innerHTML = textarea.value;
            form.remove();
            isEditing = false;
        }
        if (e.target.className === 'cancel-btn') {
            let target = e.target.closest('td');
            target.innerHTML = initialCellHTML;
            form.remove();
            isEditing = false;
        }
    }
})