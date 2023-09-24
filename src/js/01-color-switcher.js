const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColorStart() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
    let color = getRandomHexColor();
    body.style.backgroundColor = color;
}, 1000);

    console.log(timerId);
}

function changeColorStop() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

startBtn.addEventListener('click', changeColorStart);
stopBtn.addEventListener('click', changeColorStop);
