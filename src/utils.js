//DATA FUNCTION DECLARATIONS ONLY!

// HYDRATION FUNCTIONS

const getAvgTotalFluid = (data, id) => {
  if (!data || !id) {
    return undefined;
  }
  const hydrationEntries = data.filter((entry) => entry.userID === id);
  console.log(hydrationEntries.length);
  const hydrationAvg = hydrationEntries.reduce((acc, user) => {
    return (acc += user.numOunces);
  }, 0);
  return Math.round(hydrationAvg / hydrationEntries.length);
};
// console.log(getAvgTotalFluid(hydrationData, 1))

const getDayFluids = (data, id, date) => {
  if (!data || !id || !date) {
    return undefined;
  }
  const hydrationEntries = data.filter((entry) => entry.userID === id);
  const dailyEntry = hydrationEntries.find((entry) => entry.date === date);
  return dailyEntry.numOunces;
};
// console.log(getDayFluids(hydrationData, 1, "2023/03/24" )

const getWeeklyHydration = (hydrationData, userId) => {
  if (!hydrationData || !userId) {
    return undefined;
  }
  const userHydrationData = hydrationData.filter(
    (data) => data.userID === userId
  );
  const weeklyOunces = userHydrationData.map((data) => ({
    date: data.date,
    ounces: data.numOunces,
  }));
  return weeklyOunces;
};
// console.log(getWeeklyHydration(hydrationData, 31))

// SLEEP FUNCTIONS:
const getAvgDailySleep = (sleepData, userId) => {
  if (!sleepData || !userId) {
    return undefined;
  }
  const userSleepData = sleepData.filter((data) => data.userID === userId);
  const sleepAvg = userSleepData.reduce((acc, user) => {
    return (acc += user.hoursSlept);
  }, 0);
  return Math.round(sleepAvg / userSleepData.length);
};

const getAvgSleepQuality = (sleepData, userId) => {
  if (!sleepData || !userId) {
    return undefined;
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
    return undefined;
  }
  const userSleepData = sleepData.find(
    (data) => data.userID === userId && data.date === date
  );
  return userSleepData ? userSleepData.hoursSlept : undefined;
};

export {
  getAvgTotalFluid,
  getDayFluids,
  getWeeklyHydration,
  getAvgDailySleep,
  getAvgSleepQuality,
  getHoursSleptForDay,
};
