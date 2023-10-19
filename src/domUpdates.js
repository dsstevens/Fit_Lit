import { users } from "./data/users";
import { getRandomUser, calculateAvgStepGoal, getUserData } from "./scripts";

const loadCards = (userData) => {
  window.addEventListener("load", (event) => {
    const randomUser = getRandomUser(userData.users);
    updateInfoCard(randomUser);
    updateWelcomeMessage(randomUser.name);
    compareStepGoals(randomUser.dailyStepGoal);
  });
};

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

const compareStepGoals = (user, averageStepGoal) => {
  const userStepGoal = user.dailyStepGoal;
  const comparisonElement = document.querySelector(".step-goal-comparison");

  if (userStepGoal > averageStepGoal) {
    comparisonElement.textContent = `Your step goal is above average!`;
  } else if (userStepGoal < averageStepGoal) {
    comparisonElement.textContent = `Your step goal is below average.`;
  } else {
    comparisonElement.textContent = `Your step goal is average.`;
  }
};

export { loadCards, updateWelcomeMessage, compareStepGoals };
