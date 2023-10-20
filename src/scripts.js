// This is the JavaScript entry file - your code begins her
const getUserData = (users, userId) => {
  return users.find((user) => user.id === userId);
};

const calculateAvgStepGoal = (users) => {
  const totalStepGoal = users.reduce(
    (sum, { dailyStepGoal }) => sum + dailyStepGoal,
    0
  );
  return totalStepGoal / users.length;
};

const getRandomUser = (users) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  return randomUser;
};

//place these vars inside of the promiseAll inside of the window event listener
//window event listener lives in the domUpdates file, possible to have 2? condense in 1?
//refactor the eventlistener to have loadcards inside AND the promiseall
//move the eventlistener here
//babysteps

sleepAPICall = fetchAPIcall(activity)
sleepAPICall = fetchAPIcall(users)
sleepAPICall = fetchAPIcall(sleep)
sleepAPICall = fetchAPIcall(hydration)

// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";

// An example of how you tell webpack to use a JS file
import userData from "./data/users";
// console.log("hello");
// console.log("User Data:", userData);

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { loadCards } from "./domUpdates";
import { fetchAPIcall } from "./apiCalls";

loadCards(userData);


export { getUserData, calculateAvgStepGoal, getRandomUser };
