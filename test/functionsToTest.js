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

// SLEEP FUNCTIONS:
const getAvgDailySleep = (sleepData, userId) => {
  if (!sleepData || !userId) {
    return 0;
  }
  const userSleepData = sleepData.filter((data) => data.userID === userId);
  const sleepAvg = userSleepData.reduce((acc, user) => {
    return (acc += user.hoursSlept);
  }, 0);
  return Math.round(sleepAvg / userSleepData.length);
};

const getAvgSleepQuality = (sleepData, userId) => {
  if (!sleepData || !userId) {
    return 0;
  }
  const userSleepData = sleepData.filter((data) => data.userID === userId);
  const totalSleepQuality = userSleepData.reduce(
    (acc, user) => acc + user.sleepQuality,
    0
  );
  return totalSleepQuality / userSleepData.length;
};

const getHoursSleptForDay = (sleepData, userId, date) => {
  if (!sleepData || !userId || !date) {
    return 0;
  }
  const userSleepData = sleepData.find(
    (data) => data.userID === userId && data.date === date
  );
  return userSleepData ? userSleepData.hoursSlept : 0;
};

const getSleepQualityForDay = (sleepData, userId, date) => {
  if (!sleepData || !userId || !date) {
    return 0;
  }
  const userSleepData = sleepData.find(
    (data) => data.userID === userId && data.date === date
  );
  return userSleepData ? userSleepData.sleepQuality : 0;
};

const getHoursSleptForWeek = (sleepData, userId, startDate) => {
  if (!sleepData || !userId || !startDate) {
    return 0;
  }
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  const userSleepData = sleepData.filter(
    (data) =>
      data.userID === userId &&
      new Date(data.date) >= startDate &&
      new Date(data.date) <= endDate
  );
  return userSleepData.map((data) => ({
    date: data.date,
    hoursSlept: data.hoursSlept,
  }));
};

const getSleepQualityForWeek = (sleepData, userId, startDate) => {
  if (!sleepData || !userId || !startDate) {
    return undefined;
  }
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  const userSleepData = sleepData.filter(
    (data) =>
      data.userID === userId &&
      new Date(data.date) >= startDate &&
      new Date(data.date) <= endDate
  );
  return userSleepData.map((data) => ({
    date: data.date,
    sleepQuality: data.sleepQuality,
  }));
};

// console.log(getWeeklyHydration(hydrationData, 31))

export {
  getUserData,
  calculateAvgStepGoal,
  getRandomUser,
  getAvgTotalFluid,
  getDayFluids,
  getWeeklyHydration,
  getAvgDailySleep,
  getAvgSleepQuality,
  getHoursSleptForDay,
  getSleepQualityForDay,
  getHoursSleptForWeek,
  getSleepQualityForWeek
}