

const getUserData = (users, userId) => {
  return users.find(user => user.id === userId);
};

const calculateAvgStepGoal = users => {
  const totalStepGoal = users.reduce((sum, { dailyStepGoal }) => sum + dailyStepGoal, 0); 
  return totalStepGoal / users.length;
};

const getRandomUser = (users) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  return randomUser;
}

export {
  getUserData,
  calculateAvgStepGoal,
  getRandomUser
}