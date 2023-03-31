const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const startBtnEl = document.querySelector("#startBtn");
const pauseEl = document.querySelector("#pauseBtn");
const resumeEl = document.querySelector("#resumeBtn");
const resetEl = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds =0;
let isPaused= false;

startBtnEl.addEventListener("click", startTimer)

function startTimer() {
    interval = setInterval(() => {

        if(!isPaused) {

            miliseconds += 10;
        }

        if(miliseconds === 1000){
            seconds++;
            miliseconds = 0;
        }

        if(seconds === 60){
            minutes++;
            seconds = 0;
        }

        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;
        milisecondsEl.textContent = miliseconds;
    }, 10);
}

