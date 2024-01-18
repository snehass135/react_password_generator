const timeElement = document.getElementById("time");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

let interval;

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener("click", function () {
    if (!interval) {
        interval = setInterval(updateTime, 1000);
        updateTime();
        startButton.disabled = true;
        stopButton.disabled = false;
    }
});

stopButton.addEventListener("click", function () {
    if (interval) {
        clearInterval(interval);
        interval = null;
        startButton.disabled = false;
        stopButton.disabled = true;
    }
});
