const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function getTime() {
    let data = new Date();
    let hours = data.getHours() < 10 ? '0' + data.getHours() : data.getHours();
    let minutes = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes();
    let seconds = data.getSeconds()< 10 ? '0' + data.getSeconds() : data.getSeconds();

    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
}

setInterval(() => {
    getTime()
}, 1000)