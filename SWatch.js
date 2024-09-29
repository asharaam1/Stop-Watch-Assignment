var milSec = document.querySelector("#mil-sec");
var sec = document.querySelector("#sec");
var minute = document.querySelector("#min");
var hours = document.querySelector("#hrs");
var milliseconds;
var seconds;

function start() {
  if (milliseconds || seconds) {
    // Prevent starting multiple timers if already running
    return;
  }

  // Start the milliseconds interval
  milliseconds = setInterval(function () {
    milSec.innerHTML++;

    if (milSec.innerHTML == 100) {
      milSec.innerHTML = "000";
      sec.innerHTML++;
      
      if (sec.innerHTML == 60) {
        sec.innerHTML = "00";
        minute.innerHTML++;
      }

      if (minute.innerHTML == 60) {
        minute.innerHTML = "00";
        hours.innerHTML++;
      }
    }
  }, 1); // Updates every millisecond
}

function stop() {
  clearInterval(milliseconds);
  milliseconds = null;
}

function reset() {
  clearInterval(milliseconds);
  milSec.innerHTML = "000";
  sec.innerHTML = "00";
  minute.innerHTML = "00";
  hours.innerHTML = "00";
  milliseconds = null;
}
