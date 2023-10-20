const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

countDown();

function countDown () {
    
    const targetTime = new Date("Jan 1, 2024 00:00:00").getTime();
    const nowTime = new Date().getTime();
    const gapTime = targetTime - nowTime;
    
    const milisecond = gapTime;
    const second = milisecond / 1000;
    const minute = second / 60;
    const hour = minute / 60;
    const day = hour / 24;

    const d = Math.floor(day);
    const h = Math.floor(hour % 24);
    const m = Math.floor(minute % 60);
    const s = Math.floor(second % 60);

    dayElement.innerText = addZero(d);
    hourElement.innerText = addZero(h);
    minuteElement.innerText = addZero(m);
    secondElement.innerText = addZero(s);
    
    setTimeout(() => {
        countDown()
    }, 1000)
}

function addZero (n) {
    if(n < 10) {
        return "0" + n; 
    } else {
        return n;
    }
}