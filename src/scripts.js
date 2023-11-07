import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/banner.png";
import { fetchAPIcall } from "./apiCalls";
import { updateDom } from "./domUpdates";

let userId = 0;

// // EVENT LISTENERS
window.addEventListener("load", function () {
  let userId = null;
  Promise.all([
    fetchAPIcall("activity"),
    fetchAPIcall("users"),
    fetchAPIcall("sleep"),
    fetchAPIcall("hydration"),
  ]).then((allData) => {
    if (userId) {
      updateDom(allData, userId);
    } else {
      updateDom(allData);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const timerDisplay = document.getElementById("timer-display");
  const startButton = document.getElementById("stretch-timer");
  const repsCountDisplay = document.getElementById("reps-count");
  const setsCountDisplay = document.getElementById("sets-count");
  const completionMessage = document.getElementById("completion-message");

  let countdown;
  let repsCount = 0;
  let setsCount = 0;

  startButton.addEventListener("click", function () {
    this.textContent = "Good luck! 💪";
    this.disabled = true;
    let timeLeft = 15;

    countdown = setInterval(() => {
      if (timeLeft >= 0) {
        timerDisplay.textContent = `00:${
          timeLeft < 10 ? "0" + timeLeft : timeLeft
        }`;
        timeLeft--;
      } else {
        clearInterval(countdown);
        repsCount++;
        if (repsCount >= 8) {
          repsCount = 0;
          setsCount++;
          setsCountDisplay.textContent = setsCount;
        }
        repsCountDisplay.textContent = repsCount;
        completionMessage.textContent = "Nice job!";
        setTimeout(() => {
          completionMessage.textContent = "";
          timerDisplay.textContent = "00:15";
          startButton.textContent = "Start";
          startButton.disabled = false;
        }, 1500);
      }
    }, 1000);
  });
});

function toggleVisibility(className) {
  const elements = document.getElementsByClassName(className);

  for (const element of elements) {
    if (className === "login") {
      element.style.display = "none";
    } else if (className === "login-div") {
      element.style.display = "block";
    }
  }
}

const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  toggleVisibility("login");
  toggleVisibility("login-div");
});

const clearUserId = () => {
  localStorage.removeItem("userId");
  Promise.all([
    fetchAPIcall("activity"),
    fetchAPIcall("users"),
    fetchAPIcall("sleep"),
    fetchAPIcall("hydration"),
  ]).then((allData) => {
    updateDom(allData);
  });
};
