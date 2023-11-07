//DOM FUNCTIONS ONLY! when writing a new function, add it to the export here and the import on scripts
import {
  // getRandomUser,
  getCurrentDate,
  calculateAvgStepGoal,
  getAvgDailySleep,
  getAvgSleepQuality,
  getHoursSleptForDay,
  getSleepQualityForDay,
  getWeeklySleepStats,
  getLatestDateForUser,
  getAvgTotalFluid,
  getDayFluids,
  getWeeklyHydration,
  getMinutesActiveForDay,
  calculateMilesWalked,
  reachedStepGoalForDay,
  getLatestSteps,
  getRandomUser,
} from "./utils";

// Update DOM
const updateDom = (allData, randomUser, userId) => {
  // Parse data
  const activityData = allData[0].activityData;
  const usersData = allData[1].users;
  const sleepData = allData[2].sleepData;
  const hydrationData = allData[3].hydrationData;

  const user = userId
    ? usersData.find((user) => user.id === parseInt(userId, 10))
    : getRandomUser(usersData);

  if (!user) {
    console.error("User not found");
    return;
  }

  // Update Header
  // const randomUser = getRandomUser(usersData);
  updateWelcomeMessage(randomUser.name);
  const currentDate = getCurrentDate();
  updateTargetDate(currentDate);

  // Update Info Card
  updateInfoCard(randomUser);

  // Update Step Goal Card
  const avgStepGoal = calculateAvgStepGoal(usersData);
  updateStepGoalCard(randomUser, avgStepGoal);

  // Update Sleep Card
  updateSleepCard(sleepData, randomUser.id, currentDate);

  // Update Hydration Card
  doHydrationUpdate(hydrationData, randomUser);
  // const latestDate = getLatestDateForUser(hydrationData, randomUser.id);
  // const avgFluidIntake = getAvgTotalFluid(hydrationData, randomUser.id);
  // const dailyFluidIntake = getDayFluids(
  //   hydrationData,
  //   randomUser.id,
  //   latestDate
  // );
  // const weeklyHydration = getWeeklyHydration(hydrationData, randomUser.id);
  // updateHydrationCard(avgFluidIntake, dailyFluidIntake, weeklyHydration);

  updateActivityCard(activityData, randomUser, currentDate);
};

const doHydrationUpdate = (hydrationData, randomUser) => {
  const latestDate = getLatestDateForUser(hydrationData, randomUser.id);
  const avgFluidIntake = getAvgTotalFluid(hydrationData, randomUser.id);
  const dailyFluidIntake = getDayFluids(
    hydrationData,
    randomUser.id,
    latestDate
  );
  const weeklyHydration = getWeeklyHydration(hydrationData, randomUser.id);
  updateHydrationCard(avgFluidIntake, dailyFluidIntake, weeklyHydration);

  // updateActivityCard(activityData, randomUser, currentDate);
};

// Update Info Card
const updateInfoCard = (user) => {
  const infoCard = document.querySelector(".info-card");
  infoCard.innerHTML = `
    <h2>${user.name}</h2>
    <h5>Email: ${user.email}</h5>
    <h5>Address: ${user.address}</h5>
    <h5>Stride Length: ${user.strideLength}</h5>
    <h5>Daily Step Goal: ${user.dailyStepGoal}</h5>
  `;
};

// Update Welcome Message
const updateWelcomeMessage = (userName) => {
  const welcomeMessage = document.querySelector(".welcome-user-msg");
  welcomeMessage.textContent = `Welcome, ${userName}`;

  const iconElement = document.createElement("h2");
  iconElement.classList.add("material-symbols-outlined");
  iconElement.textContent = "person";

  welcomeMessage.appendChild(iconElement);
};

// Update Target Date
const updateTargetDate = (date) => {
  const targetDate = document.querySelector(".date");
  targetDate.textContent = date;
};

// Update Step Goal Card
const updateStepGoalCard = (randomUser, avgStepGoal) => {
  updateUserStepGoal(randomUser);
  updateAllUserAverageStepGoal(avgStepGoal);
  updateCompareStepGoals(randomUser, avgStepGoal);
};

const updateUserStepGoal = (randomUser) => {
  updateElementText(
    "user-step-goal",
    `User Step Goal: ${randomUser.dailyStepGoal}`
  );
};

const updateAllUserAverageStepGoal = (avgStepGoal) => {
  updateElementText("avg-step-goal", `Average Step Goal: ${avgStepGoal}`);
};

const updateCompareStepGoals = (randomUser, avgStepGoal) => {
  const comparisonElement = document.querySelector(".step-goal-comparison");

  if (randomUser.dailyStepGoal > avgStepGoal) {
    comparisonElement.textContent = `Your step goal is above average!`;
  } else if (randomUser.dailyStepGoal < avgStepGoal) {
    comparisonElement.textContent = `Your step goal is below average.`;
  } else {
    comparisonElement.textContent = `Your step goal is average.`;
  }
};

// Update Sleep Card
const updateSleepCard = (sleepData, userId, date) => {
  const avgDailySleep = getAvgDailySleep(sleepData, userId, date);
  const avgSleepQuality = getAvgSleepQuality(sleepData, userId);

  updateElementText(
    "sleep-daily-hrs",
    `Average daily hours slept: ${avgDailySleep.toFixed(2)}`
  );
  updateElementText(
    "sleep-avg-daily-hrs",
    `Average sleep quality: ${avgSleepQuality.toFixed(2)}`
  );

  const hoursSleptForDay = getHoursSleptForDay(sleepData, userId, date);
  const sleepQualityForDay = getSleepQualityForDay(sleepData, userId, date);

  updateElementText(
    "sleep-daily-hrs-current-week",
    `Hours slept on ${date}: ${hoursSleptForDay}`
  );
  updateElementText(
    "sleep-daily-qlty-current-week",
    `Sleep quality on ${date}: ${sleepQualityForDay}`
  );

  const latestWeekSleepData = getWeeklySleepStats(sleepData, date, userId);
  const latestWeekAvgHoursSlept = latestWeekSleepData.averageHoursSlept;
  const latestWeekAvgSleepQuality = latestWeekSleepData.averageSleepQuality;

  updateElementText(
    "sleep-daily-avg-hrs",
    `Latest week average hours slept: ${latestWeekAvgHoursSlept.toFixed(2)}`
  );

  updateElementText(
    "sleep-daily-avg-qlty",
    `Latest week average sleep quality: ${latestWeekAvgSleepQuality.toFixed(2)}`
  );
};

// Update Hydration Card
const updateHydrationCard = (
  avgFluidIntake,
  dailyFluidIntake,
  weeklyHydration
) => {
  updateElementText(
    "water-daily-avg",
    `Average Daily Intake: ${avgFluidIntake} ounces`
  );
  updateElementText(
    "water-weekly-view",
    `Today's Intake: ${dailyFluidIntake} ounces`
  );

  const weeklyFluidElement = document.querySelector(".water-weekly-view");
  const weeklyFluidStr = weeklyHydration
    .map((entry) => `${entry.date}: ${entry.ounces} ounces`)
    .join("<br>");
  weeklyFluidElement.innerHTML = `<b>Weekly Intake:</b><br>${weeklyFluidStr}`;
};

// Update Activity Card
const updateActivityCard = (activityData, randomUser, date) => {
  const minutesActiveDay = getMinutesActiveForDay(
    randomUser,
    activityData,
    date
  );

  const milesWalked = calculateMilesWalked(randomUser, activityData, date);
  const stepGoalReached = reachedStepGoalForDay(randomUser, activityData, date);
  const latestSteps = getLatestSteps(activityData, randomUser.id, date);


  updateElementText("activity", "Activity Data");
  updateElementText("min-active-day", `Minutes Active: ${minutesActiveDay}`);
  updateElementText(
    "reached-step-goal",
    `Reached Step Goal: ${stepGoalReached}`
  );
  updateElementText("miles-per-day", `${milesWalked}`);
  updateElementText("latest-steps", `Latest Steps: ${latestSteps}`);
};

// Helper Functions
const updateElementText = (className, content) => {
  const element = document.querySelector(`.${className}`);
  if (element) {
    element.textContent = content;
  }
};

const setErrorMessage = (errorMessage) => {
  const formErrorElement = document.querySelector("#formError");
  formErrorElement.textContent = errorMessage;
};

export { updateDom, doHydrationUpdate, setErrorMessage };
