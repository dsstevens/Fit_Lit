// IMPORTS
import { fetchAPIcall } from './apiCalls'
import { updateInfoCard, updateWelcomeMessage, compareStepGoals } from './domUpdates'
// after making sure that the user data is being imported from the api, delete the users import and reorient the users arg for several fns


let activityData = []
let userData = []
let sleepData = []
let hydrationData = []
// EVENTLISTENERS
window.addEventListener("load", function () {
  console.log("anystring")
  
  Promise.all([
    fetchAPIcall('activity'),
    fetchAPIcall('users'),
    fetchAPIcall('sleep'),
    fetchAPIcall('hydration')
  ])
  .then((response) => {
    activityData = response[0]
    userData = response[1]
    sleepData = response[2]
    hydrationData = response[3]
    console.log("response", response)
      
    getRandomUser(userData);
    getUserData(userData, randomUser.id);
    calculateAvgStepGoal(userData);
    updateWelcomeMessage(randomUser.name);
    updateInfoCard(randomUser);
    compareStepGoals(randomUser, averageStepGoal);

})
});

const getUserData = (userData, userId) => {
  return userData.find((user) => user.id === userId);
};

const calculateAvgStepGoal = (userData) => {
  const totalStepGoal = userData.reduce(
    (sum, { dailyStepGoal }) => sum + dailyStepGoal,
    0
  );
  return totalStepGoal / userData.length;
};

const getRandomUser = (userData) => {
  const randomIndex = Math.floor(Math.random() * userData.length);
  const randomUser = userData[randomIndex];
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
