

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

const getAvgTotalFluid = (data, id) => {
  const hydrationEntries = data.filter((entry) => entry.userID === id)
  console.log(hydrationEntries.length)
  const hydrationAvg = hydrationEntries.reduce((acc, user) => {
    return (acc += user.numOunces)
  }, 0)
  return Math.round(hydrationAvg / hydrationEntries.length)
}
console.log(getAvgTotalFluid(hydrationData, 1))

export {
  getUserData,
  calculateAvgStepGoal,
  getRandomUser,
  getAvgTotalFluid
}