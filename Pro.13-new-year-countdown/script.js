const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

countDown();

function countDown () {

    const newYear = new Date("Jan 1, 2024 00:00:00").getTime();
    const now = Date.now();
    const milisecond = newYear - now;
    const second = Math.floor(milisecond / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);

    const d = day;
    const h = hour % 24;
    const m = minute % 60;
    const s = second % 60;

    dayElement.innerText = d < 10 ? "0" + d : d;
    hourElement.innerText = h < 10 ? "0" + h : h;
    minuteElement.innerText = m < 10 ? "0" + m : m;
    secondElement.innerText = s < 10 ? "0" + s : s;

    setTimeout(() => {
        countDown();
    }, 1000)
}