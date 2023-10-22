import { fetchAPIcall } from "./apiCalls";
import {
  updateInfoCard,
  updateWelcomeMessage,
  updateStepGoalCard,
  updateSleepInfo,
  updateHydrationData,
} from "./domUpdates";
// after making sure that the user data is being imported from the api, delete the users import
import { getAvgTotalFluid, getDayFluids, getWeeklyHydration } from "./utils";

const updateDom = (allData) => {
  const activityData = allData[0].activityData;
  const usersData = allData[1].users;
  const sleepData = allData[2].sleepData;
  const hydrationData = allData[3].hydrationData;
  const randomUser = getRandomUser(usersData);
  // const randomUserData = getUserData(usersData, randomUser.id);
  const avgStepGoal = calculateAvgStepGoal(usersData);
  updateWelcomeMessage(randomUser.name);
  updateInfoCard(randomUser);
  updateStepGoalCard(randomUser, avgStepGoal);
  updateSleepInfo(sleepData, randomUser.id);

  const latestDate = getLatestDateForUser(hydrationData, randomUser.id);
  const avgFluidIntake = getAvgTotalFluid(hydrationData, randomUser.id);
  const dailyFluidIntake = getDayFluids(
    hydrationData,
    randomUser.id,
    latestDate
  );
  const weeklyHydration = getWeeklyHydration(hydrationData, randomUser.id);

  updateHydrationData(avgFluidIntake, dailyFluidIntake, weeklyHydration);
};

// // EVENTLISTENERS
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
const getLatestDateForUser = (hydrationData, userId) => {
  const userHydrationData = hydrationData.filter(
    (data) => data.userID === userId
  );
  const latestDate = userHydrationData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0].date;
  return latestDate;
};

export { calculateAvgStepGoal, getRandomUser };