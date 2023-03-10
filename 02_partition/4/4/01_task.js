'use strict';
// Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html),
// полем ввода и кнопками OK/ОТМЕНА.

// Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK»,
// после чего должна вызываться функция callback(value) со значением поля.
// Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
// В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

// Требования:
// Форма должна быть в центре окна.
// Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно,
// пока пользователь не закроет его.
// При показе формы, фокус должен находиться сразу внутри <input>.
// Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим
// элементам страницы.


// Решение

let showFormBtn = document.getElementById('show-form');
let promptFormContainer = document.getElementById('prompt-form-container');
let promptMessageElem = document.getElementById('prompt-message');
let form = document.getElementById('prompt-form');

showFormBtn.addEventListener('click', () =>
    showPrompt("Введите что-нибудь<br>...умное :)", (value) => alert(value)));



function showPrompt(html, callback) {
    promptFormContainer.style.display = 'inline-block';
    promptMessageElem.innerHTML = html;

    form.text.focus();

    form.addEventListener('submit', submit);
    form.addEventListener('keydown', closeFormWithNull);
    form.addEventListener('click', closeFormWithNull);

    function submit(e) {
        let text = form.text.value

        if (!text) {
            e.preventDefault()
            return;
        }

        callback(text);

        form.removeEventListener('submit', submit);
        form.removeEventListener('keydown', closeFormWithNull);
        form.removeEventListener('click', closeFormWithNull);    }

    function closeFormWithNull(e) {
        if (e.type === 'keydown' && e.key !== 'Escape') return;
        if (e.type === 'click' && e.target.name !== 'cancel') return;

        callback(null);
        promptFormContainer.style.display = 'none';

        form.removeEventListener('submit', submit);
        form.removeEventListener('keydown', closeFormWithNull);
        form.removeEventListener('click', closeFormWithNull);
    }
}