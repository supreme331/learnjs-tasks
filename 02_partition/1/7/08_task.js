'use strict';
// Создайте цветные часы как в примере
// Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.

let hoursElem = document.querySelector('.hours');
let minutesElem = document.querySelector('.minutes');
let secondsElem = document.querySelector('.seconds');

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', startClock);
stopBtn.addEventListener('click', stopClock);
resetBtn.addEventListener('click', resetClock);

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerId;

function startClock() {
    startBtn.setAttribute('disabled', 'true');
    timerId = setInterval(() => {
        seconds++;
        secondsElem.textContent = `${(seconds === 60) ? '00' : (seconds > 9) ? seconds : '0' + seconds}`;

        if (seconds > 59) {
            seconds = 0;
            minutes++;
            minutesElem.textContent = `${(minutes === 60) ? '00' : (minutes > 9) ? minutes : '0' + minutes}`;
        }

        if (minutes > 59) {
            minutes = 0;
            hours++;
            hoursElem.textContent = `${(hours > 10) ? hours : '0' + hours}`;
        }
    }, 10)


}

function stopClock() {
    clearInterval(timerId);;
    startBtn.removeAttribute('disabled');
}

function resetClock() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsElem.textContent = '00';
    minutesElem.textContent = '00';
    hoursElem.textContent = '00';
}