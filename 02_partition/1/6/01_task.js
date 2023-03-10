'use strict';
// Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

let menuWidget = document.querySelector('div[data-widget-name="menu"]');

alert(menuWidget.dataset.widgetName);