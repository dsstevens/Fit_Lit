window.addEventListener("load", function() {
  getRandomUser(users)
  getUserData(users, randomUser.id)
  calculateAvgStepGoal()
  updateWelcomeMessage(randomUser.name)
  updateInfoCard(randomUser)
  compareStepGoals(randomUser, averageStepGoal)

})

const updateInfoCard = (user) => {
  const infoCard = document.querySelector('.info-card');
  infoCard.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Address: ${user.address}</p>
    <p>Stride Length: ${user.strideLength}</p>
    <p>Daily Step Goal: ${user.dailyStepGoal}</p>
  `;
};

const updateWelcomeMessage = (userName) => {
  const welcomeMessage = document.querySelector('.welcome-user-msg');
  welcomeMessage.textContent = `Welcome, ${userName}!`;
};

const compareStepGoals = (user, averageStepGoal) => {
  const userStepGoal = user.dailyStepGoal;
  const comparisonElement = document.querySelector('.step-goal-comparison');
  
  if (userStepGoal > averageStepGoal) {
    comparisonElement.textContent = `Your step goal is above average!`;
  } else if (userStepGoal < averageStepGoal) {
    comparisonElement.textContent = `Your step goal is below average.`;
  } else {
    comparisonElement.textContent = `Your step goal is average.`;
  }
};


//NOTE: Your DOM manipulation will occur in this file

//Here are 2 example functions just to demonstrate one way you can export/import between the two js files. You'll want to delete these once you get your own code going.
// const exampleFunction1 = (person) => {
//   console.log(`oh hi there ${person}`)
// }

// const exampleFunction2 = (person) => {
//   console.log(`bye now ${person}`)
// }

// const displayUserInfo = (user) => {
//   const randomUser = getRandomUser();
//   displayUserInfo(randomUser);
// }

export {
  updateInfoCard,
  updateWelcomeMessage, 
  compareStepGoals
}