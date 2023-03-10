'use strict';
// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Например:

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

// Синтаксис:
let container = document.getElementById('container');
let container2 = document.getElementById('container2');
createTree(container, data); // создаёт дерево в контейнере
createTree2(container2, data); // создаёт дерево в контейнере


// Решение через container.innerHTML

function createTree(container, data) {
    container.innerHTML = createMarkup(data);
}

function createMarkup(data) {
    let li = '';
    let markup;

    for (const key of Object.keys(data)) {
        li += `<li>${key}${createMarkup(data[key]) ? createMarkup(data[key]) : ''}</li>`;
    }

    if(li) {
        markup = `<ul>${li}</ul>`;
    }

    return markup || '';
}

// Решение через методы DOM

function createTree2(container, data) {
    let treeDOM = createTreeDOM(data);
    container.append(treeDOM);
}

function createTreeDOM(data) {
    if (!Object.keys(data).length) return;

    let ul = document.createElement('ul');

    for (const key of Object.keys(data)) {
        let li = document.createElement('li');

        li.textContent = key;

        let children = createTreeDOM(data[key]);

        if (children) li.append(children);

        ul.append(li);
    }
    return ul;
}