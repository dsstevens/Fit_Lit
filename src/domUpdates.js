//DOM FUNCTIONS ONLY! when writing a new function, add it to the export here and the import on scripts
import {
  getHoursSleptForDay,
  getAvgSleepQuality,
  getSleepQualityForDay,
} from "./utils";

const updateInfoCard = (user) => {
  const infoCard = document.querySelector(".info-card");
  infoCard.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Address: ${user.address}</p>
    <p>Stride Length: ${user.strideLength}</p>
    <p>Daily Step Goal: ${user.dailyStepGoal}</p>
  `;
};

const updateWelcomeMessage = (userName) => {
  const welcomeMessage = document.querySelector(".welcome-user-msg");
  welcomeMessage.textContent = `Welcome, ${userName}!`;
};

// StepGoal Dom Functions
const updateStepGoalCard = (randomUser, avgStepGoal) => {
  updateUserStepGoal(randomUser);
  updateAllUserAverageStepGoal(avgStepGoal);
  updateCompareStepGoals(randomUser, avgStepGoal);
};

const updateUserStepGoal = (randomUser) => {
  const userStepGoalElement = document.querySelector(".usr-step-goal");

  userStepGoalElement.textContent = `User Step Goal: ${randomUser.dailyStepGoal}`;
};

const updateAllUserAverageStepGoal = (avgStepGoal) => {
  const avgStepGoalElement = document.querySelector(".avg-step-goal");

  avgStepGoalElement.textContent = `Average Step Goal: ${avgStepGoal}`;
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

// SleepData Dom Functions
const updateElementText = (className, content) => {
  const element = document.querySelector(`.${className}`);
  if (element) {
    element.textContent = content;
  }
};

const updateSleepInfo = (sleepData, userId) => {
  const specificDay = "2023-10-19"; // Example date

  const avgDailySleep = getHoursSleptForDay(sleepData, userId, specificDay);
  const avgSleepQuality = getAvgSleepQuality(sleepData, userId);

  updateElementText(
    "sleep-daily-hrs",
    `Average daily hours slept: ${avgDailySleep.toFixed(2)}`
  );
  updateElementText(
    "sleep-avg-daily-hrs",
    `Average sleep quality: ${avgSleepQuality.toFixed(2)}`
  );

  const hoursSleptForDay = getHoursSleptForDay(sleepData, userId, specificDay);
  const sleepQualityForDay = getSleepQualityForDay(
    sleepData,
    userId,
    specificDay
  );

  updateElementText(
    "sleep-daily-hrs-current-week",
    `Hours slept on ${specificDay}: ${hoursSleptForDay}`
  );
  updateElementText(
    "sleep-daily-qlty-current-week",
    `Sleep quality on ${specificDay}: ${sleepQualityForDay}`
  );
};

export {
  updateInfoCard,
  updateWelcomeMessage,
  updateStepGoalCard,
  updateSleepInfo,
};
