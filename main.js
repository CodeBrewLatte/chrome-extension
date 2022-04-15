document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");

  const formSubmit = document.querySelector("#formsubmit");
  const select = document.querySelector("#timers");

  const secondDOM = document.getElementById("seconds");
  const minuteDOM = document.getElementById("minutes");
  const hourDOM = document.getElementById("hours");

  const cdSecondDOM = document.getElementById("cdseconds");
  const cdMinuteDOM = document.getElementById("cdminutes");
  const cdHourDOM = document.getElementById("cdhours");

  var start = Date.now();

  const startSomething = (e) => {
    let i = 0;
    e.preventDefault();
    function startTimer() {
      let now = Date.now();
      let timeBetween = (future - now) / 1000;
      if (future < now) {
        if (i == 0) {
          alert("You're done!");
          i++;
        }

        // reset function that changes Submit button to Reset, etc.
        formSubmit.value = "Reset";
        //formSubmit.removeEventListener("click", startSomething);
        return;
      }
      console.log(future, now);

      let seconds = Math.floor(timeBetween) % 60;
      let minutes = Math.floor(timeBetween / 60) % 60;
      let hours = Math.floor(timeBetween / 3600) % 24;

      if (seconds.toString().length < 2) {
        cdSecondDOM.innerHTML = ":0" + seconds.toString();
      } else cdSecondDOM.innerHTML = ":" + seconds.toString();
      if (minutes.toString().length < 2) {
        cdMinuteDOM.innerHTML = ":0" + minutes.toString();
      } else cdMinuteDOM.innerHTML = ":" + minutes.toString();
      if (hours.toString().length < 2) {
        cdHourDOM.innerHTML = "0" + hours.toString();
      } else cdHourDOM.innerHTML = hours;
    }
    let time = select.value;
    let timeMS = select.value * 60 * 1000;
    let future = Date.now() + timeMS;
    startTimer();
    setInterval(startTimer, 100);
  };

  formSubmit.addEventListener("click", startSomething);

  const countDown = () => {
    const currentDate = Date.now() - start;

    timeUse = currentDate / 1000;

    let seconds = Math.floor(timeUse) % 60;
    let minutes = Math.floor(timeUse / 60) % 60;
    let hours = Math.floor(timeUse / 3600) % 24;

    if (seconds.toString().length < 2) {
      secondDOM.innerHTML = "0" + seconds.toString();
    } else secondDOM.innerHTML = seconds;

    if (minutes.toString().length < 2) {
      minuteDOM.innerHTML = "0" + minutes.toString();
    } else minuteDOM.innerHTML = minutes;

    if (hours.toString().length < 2) {
      hourDOM.innerHTML = "0" + hours.toString();
    } else hourDOM.innerHTML = hours;
  };

  countDown();

  setInterval(countDown, 1000);
});
