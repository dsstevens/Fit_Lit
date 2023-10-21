//DOM FUNCTIONS ONLY! when writing a new function, add it to the export here and the import on scripts
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

const updateHydrationData = (avgFluidIntake, dailyFluidIntake, weeklyHydration) => {
  const avgFluidElement = document.querySelector(".water-daily-avg");
  const dailyFluidElement = document.querySelector(".water-daily-view");
  const weeklyFluidElement = document.querySelector(".water-weekly-view");

  avgFluidElement.textContent = `Average Daily Intake: ${avgFluidIntake} ounces`;
  dailyFluidElement.textContent = `Today's Intake: ${dailyFluidIntake} ounces`;

  const weeklyFluidStr = weeklyHydration.map(entry => `${entry.date}: ${entry.ounces} ounces`).join('<br>');
  weeklyFluidElement.innerHTML = `<b>Weekly Intake:</b><br>${weeklyFluidStr}`;
};

export { updateInfoCard, updateWelcomeMessage, updateStepGoalCard, updateHydrationData };