import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/banner.png";
import { fetchAPIcall, postHydrationData } from "./apiCalls";
import { updateDom, doHydrationUpdate } from "./domUpdates";
import { getRandomUser } from "./utils";

let randomUser
let hydrationData

const hydrationFormSubmitButton = document.querySelector("#hydrationFormSubmitButton");
const hydrationDate = document.querySelector("#hydrationDate");
const hydrationOunces = document.querySelector("#hydrationOunces");

const submitHydrationData = (event) => {
  event.preventDefault()
  postHydrationData(randomUser.id, hydrationDate.value, parseInt(hydrationOunces.value)).then((response) => {
    hydrationData.push(response)
    doHydrationUpdate(hydrationData, randomUser)
    hydrationDate.value = "";
    hydrationOunces.value = "";
  });
}

// // EVENT LISTENERS
window.addEventListener("load", function () {
  Promise.all([
    fetchAPIcall("activity"),
    fetchAPIcall("users"),
    fetchAPIcall("sleep"),
    fetchAPIcall("hydration"),
  ]).then((allData) => {
      randomUser = getRandomUser(allData[1].users);
      hydrationData = allData[3].hydrationData;
      updateDom(allData, randomUser);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const timerDisplay = document.getElementById('timer-display')
  const startButton = document.getElementById('stretch-timer')
  const repsCountDisplay = document.getElementById('reps-count')
  const setsCountDisplay = document.getElementById('sets-count')
  const completionMessage = document.getElementById('completion-message')
  
  let countdown
  let repsCount = 0
  let setsCount = 0

  startButton.addEventListener('click', function() {
    this.textContent = 'Good luck! 💪'
    this.disabled = true
    let timeLeft = 15

    countdown = setInterval(() => {
      if (timeLeft >= 0) {
        timerDisplay.textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`
        timeLeft--
      } else {
        clearInterval(countdown);
        repsCount++
        if (repsCount >= 8) {
          repsCount = 0
          setsCount++
          setsCountDisplay.textContent = setsCount
        }
        repsCountDisplay.textContent = repsCount
        completionMessage.textContent = 'Nice job!'
        setTimeout(() => {
          completionMessage.textContent = ''
          timerDisplay.textContent = '00:15'
          startButton.textContent = 'Start'
          startButton.disabled = false
        }, 1500)
      }
    }, 1000)
  })
})

hydrationFormSubmitButton.addEventListener("click", function(event) {
  submitHydrationData(event)
});