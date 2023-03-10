'use strict';
// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.
// P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.


// Решение

let buttons = document.querySelectorAll('.arrow');
let leftBtn = buttons[0];
let rightBtn = buttons[1];
let sliderList = document.querySelector('ul');
let sliderContainer = document.querySelector('.slider__container');
let imgWidth = sliderList.children[0].offsetWidth;
let sliderPosition = 0;
let maxSliderPosition = (sliderList.children.length - 3) * imgWidth * (-1);

sliderContainer.style.width = imgWidth * 3 + 'px';

rightBtn.addEventListener('click', () => scroll('right'))
leftBtn.addEventListener('click', () => scroll('left'))

function scroll(direction) {

    if (direction === 'right') {
        let translate;

        if (sliderPosition - 390 <= maxSliderPosition) {
            translate = maxSliderPosition;
            sliderPosition = maxSliderPosition;
        } else {
            translate = sliderPosition - 390;
            sliderPosition -= 390;
        }

        sliderList.style.transform = `translateX(${translate}px)`;
    }

    if (direction === 'left') {
        let translate;

        if (sliderPosition + 390 >= 0) {
            translate = 0;
            sliderPosition = 0;
        } else {
            translate = sliderPosition + 390;
            sliderPosition += 390;
        }

        sliderList.style.transform = `translateX(${translate}px)`;
    }
}