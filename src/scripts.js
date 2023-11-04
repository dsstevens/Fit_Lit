import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/banner.png";
import { fetchAPIcall } from "./apiCalls";
import { updateDom } from "./domUpdates";

const hydrationFormSubmitButton = document.querySelector("#hydrationFormSubmitButton");
const hydrationDate = document.querySelector("#hydrationDate");
const hydrationOunces = document.querySelector("#hydrationOunces");

const postHydrationData = (event) => {
  event.preventDefault()
  // need to call our fetch(POST) function
  // need to update DOM, use the DOM update function and take out the stuff you don't want, like generating a new random user, will you need to clear html fields?
  // you need to add, commit, checkout, pull down and merge 
  console.log(hydrationDate.value, hydrationOunces.value)
}

// // EVENT LISTENERS
window.addEventListener("load", function () {
  Promise.all([
    fetchAPIcall("activity"),
    fetchAPIcall("users"),
    fetchAPIcall("sleep"),
    fetchAPIcall("hydration"),
  ]).then((allData) => {
    updateDom(allData);
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
  postHydrationData(event)
});