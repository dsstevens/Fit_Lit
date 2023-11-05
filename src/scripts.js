import "./css/styles.css";
import "./images/turing-logo.png";
import "./images/banner.png";
import { fetchAPIcall, postHydrationData } from "./apiCalls";
import { updateDom } from "./domUpdates";
import { getRandomUser } from "./utils";

let randomUser
// const randomUser = getRandomUser(usersData);

const hydrationFormSubmitButton = document.querySelector("#hydrationFormSubmitButton");
const hydrationDate = document.querySelector("#hydrationDate");
const hydrationOunces = document.querySelector("#hydrationOunces");

const submitHydrationData = (event) => {
  event.preventDefault()
  // need to call our fetch(POST) function
  // need to update DOM, use the DOM update function and take out the stuff you don't want, like generating a new random user, will you need to clear html fields?
  // eliminate the ability to enter negative # of oz!!! on form
  // figure out the user issue (user v randomUser) and connect the fetchPost function to submit button
  // need to test submit button and post for sad path when user tries to submit incomplete or bad data
  console.log(hydrationDate.value, hydrationOunces.value, randomUser)
  postHydrationData(randomUser.id, hydrationDate.value, parseInt(hydrationOunces.value)).then((response) => {
    console.log(response)
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