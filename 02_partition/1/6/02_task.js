'use strict';
// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// Ссылка является внешней, если:
// Её href содержит ://
// Но не начинается с http://internal.com.

let list = document.querySelector('ul');

let links = list.querySelectorAll('a');

for (const link of links) {
    let href = link.getAttribute('href');

    if (href.includes('://') && !href.includes('http://internal.com')) {
        link.style.color = 'orange';
    }
}