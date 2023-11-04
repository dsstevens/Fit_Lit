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

hydrationFormSubmitButton.addEventListener("click", function(event) {
  postHydrationData(event)
});