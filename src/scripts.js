// IMPORTS
import { fetchAPIcall } from './apiCalls'
import { updateInfoCard, updateWelcomeMessage, compareStepGoals } from './domUpdates'
// after making sure that the user data is being imported from the api, delete the users import
import { users } from "./data/users";
// EVENTLISTENERS
window.addEventListener("load", function () {
  getRandomUser(users);
  getUserData(users, randomUser.id);
  calculateAvgStepGoal();
  updateWelcomeMessage(randomUser.name);
  updateInfoCard(randomUser);
  compareStepGoals(randomUser, averageStepGoal);

});
//window event listener, possible to have 2? 
//refactor the eventlistener to have the promiseall
//test with babysteps that these are working before moving the calls into the window event listener

//place these vars inside of the promiseAll inside of the window event listener
activityAPICall = fetchAPIcall('activity')
usersAPICall = fetchAPIcall('users')
sleepAPICall = fetchAPIcall('sleep')
hydrationAPICall = fetchAPIcall('hydration')

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


// Do not delete or rename this file ********
// An example of how you tell webpack to use a CSS file
import "./css/styles.css";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/turing-logo.png";

// An example of how you tell webpack to use a JS file
// import userData from "./data/users";
// console.log("hello");
// console.log("User Data:", userData);

// Example of one way to import functions from the domUpdates file.  You will delete these examples.

// loadCards(userData);


export { getUserData, calculateAvgStepGoal, getRandomUser };
