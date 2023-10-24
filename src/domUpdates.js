//DOM FUNCTIONS ONLY! when writing a new function, add it to the export here and the import on scripts
import {
  getAvgDailySleep,
  getHoursSleptForDay,
  getAvgSleepQuality,
  getSleepQualityForDay,
  getWeeklySleepStats,
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

const updateTargetDate = (date) => {
  const targetDate = document.querySelector(".date");
  targetDate.textContent = date;
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

const updateSleepInfo = (sleepData, userId, date) => {
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

  const latestWeekSleepData = getWeeklySleepStats(sleepData);
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

const updateHydrationData = (
  avgFluidIntake,
  dailyFluidIntake,
  weeklyHydration
) => {
  const avgFluidElement = document.querySelector(".water-daily-avg");
  const dailyFluidElement = document.querySelector(".water-daily-view");
  const weeklyFluidElement = document.querySelector(".water-weekly-view");

  avgFluidElement.textContent = `Average Daily Intake: ${avgFluidIntake} ounces`;
  dailyFluidElement.textContent = `Today's Intake: ${dailyFluidIntake} ounces`;

  const weeklyFluidStr = weeklyHydration
    .map((entry) => `${entry.date}: ${entry.ounces} ounces`)
    .join("<br>");
  weeklyFluidElement.innerHTML = `<b>Weekly Intake:</b><br>${weeklyFluidStr}`;
};

export {
  updateInfoCard,
  updateWelcomeMessage,
  updateStepGoalCard,
  updateSleepInfo,
  updateHydrationData,
  updateTargetDate,
};
