// USER DATA FUNCTIONS

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
};

// HYDRATION FUNCTIONS

const getAvgTotalFluid = (data, id) => {
  if(!data || !id) {
    return undefined
  }
  const hydrationEntries = data.filter((entry) => entry.userID === id)
  const hydrationAvg = hydrationEntries.reduce((acc, user) => {
    return (acc += user.numOunces)
  }, 0)
  return Math.round(hydrationAvg / hydrationEntries.length)
}
// console.log(getAvgTotalFluid(hydrationData, 1))

const getDayFluids = (data, id, date) => {
  if (!data || !id || !date) {
    return undefined
  }
  const hydrationEntries = data.filter((entry) => entry.userID === id)
  const dailyEntry = hydrationEntries.find((entry) => entry.date === date)
  return dailyEntry.numOunces
}
// console.log(getDayFluids(hydrationData, 1, "2023/03/24" )

const getWeeklyHydration = (hydrationData, userId) => {
  if (!hydrationData || !userId) {
    return [];
  }
  const userHydrationData = hydrationData.filter(data => data.userID === userId).sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 7);
  return userHydrationData.map(data => ({
    date: data.date,
    ounces: data.numOunces
  }));
};
// console.log(getWeeklyHydration(hydrationData, 31))

export {
  getUserData,
  calculateAvgStepGoal,
  getRandomUser,
  getAvgTotalFluid,
  getDayFluids,
  getWeeklyHydration
}