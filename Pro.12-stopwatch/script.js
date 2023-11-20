const watchElement = document.getElementById("watch");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let hour = 0;
let minute = 0;
let second = 0;
let timer;

startButton.addEventListener("click", startWatch);
stopButton.addEventListener("click", stopWatch);
resetButton.addEventListener("click", resetWatch);

function startWatch () {

    second ++;
    if(second > 59) {
        second = 0;
        minute ++;
    }
    if(minute > 59) {
        minute = 0;
        hour++;
    }

    watchElement.innerText = `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`;
    timer = setTimeout(() => {
        startWatch()
    }, 1000)
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopWatch() {
    clearTimeout(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetWatch() {
    clearTimeout(timer);
    second = 0;
    hour = 0;
    minute = 0;
    watchElement.innerText = "00:00:00";
    startButton.disabled = false;
    stopButton.disabled = false;
}