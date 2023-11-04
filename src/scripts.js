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

hydrationFormSubmitButton.addEventListener("click", function(event) {
  postHydrationData(event)
});