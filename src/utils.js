import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar);
dayjs.extend(require("dayjs/plugin/utc"));

// User Data Functions
const getUserData = (users, userId) => {
  return users.find((user) => user.id === userId);
};

const getRandomUser = (users) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  return randomUser;
};

// Step Goal Data Functions
const calculateAvgStepGoal = (users) => {
  const totalStepGoal = users.reduce(
    (sum, { dailyStepGoal }) => sum + dailyStepGoal,
    0
  );
  return totalStepGoal / users.length;
};

// Hydration Data Functions
const getAvgTotalFluid = (data, id) => {
  if (!data || !id) {
    return undefined;
  }
  const hydrationEntries = data.filter((entry) => entry.userID === id);
  const hydrationAvg = hydrationEntries.reduce((acc, user) => {
    return (acc += user.numOunces);
  }, 0);
  return Math.round(hydrationAvg / hydrationEntries.length);
};

const getLatestDateForUser = (hydrationData, userId) => {
  const userHydrationData = hydrationData.filter(
    (data) => data.userID === userId
  );
  const latestDate = userHydrationData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0].date;
  return latestDate;
};

const getDayFluids = (data, id, date) => {
  if (!data || !id || !date) {
    return undefined;
  }
  const hydrationEntries = data.filter((entry) => entry.userID === id);
  const dailyEntry = hydrationEntries.find((entry) => entry.date === date);
  return dailyEntry.numOunces;
};

const getWeeklyHydration = (hydrationData, userId) => {
  if (!hydrationData || !userId) {
    return [];
  }
  const userHydrationData = hydrationData
    .filter((data) => data.userID === userId)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 7);
  return userHydrationData.map((data) => ({
    date: data.date,
    ounces: data.numOunces,
  }));
};

// Sleep Data Functions
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
  const userSleepData = sleepData.find((data) => data.date === date);
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

const getWeeklySleepStats = (weekSleepData) => {
  let totalHoursSlept = 0;
  let totalSleepQuality = 0;

  for (const entry of weekSleepData) {
    totalHoursSlept += entry.hoursSlept;
    totalSleepQuality += entry.sleepQuality;
  }

  const averageHoursSlept = totalHoursSlept / weekSleepData.length;
  const averageSleepQuality = totalSleepQuality / weekSleepData.length;

  return {
    totalHoursSlept,
    averageHoursSlept,
    totalSleepQuality,
    averageSleepQuality,
  };
};

const getAvgHoursSlept = (sleepData, userID) => {
  const sleepEntries = sleepData.filter((entry) => entry.userID === userID);
  const avgHoursSlept = sleepEntries.reduce((acc, user) => {
    return (acc += user.hoursSlept);
  }, 0);
  return Math.round((avgHoursSlept / sleepEntries.length) * 10) / 10;
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
      new Date(data.date) >= new Date(startDate) &&
      new Date(data.date) <= endDate
  );
  return userSleepData.map((data) => data.hoursSlept);
};

const getSleepQualityForWeek = (sleepData, userId, startDate) => {
  if (!sleepData || !userId || !startDate) {
    return 0;
  }
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  const userSleepData = sleepData.filter(
    (data) =>
      data.userID === userId &&
      new Date(data.date) >= new Date(startDate) &&
      new Date(data.date) <= endDate
  );
  return userSleepData.map((data) => data.hoursSlept);
};

// Activity Data Functions
const calculateMilesWalked = (user, activityData, date) => {
  console.log(activityData);
  console.log(user);
  const userActivityForDate = activityData.find(
    (activity) => activity.date === date
  );

  if (!userActivityForDate) {
    return "No activity found for the given date.";
  }

  const miles = (user.strideLength * userActivityForDate.numSteps) / 5280;
  return `Miles walked: ${miles.toFixed(2)}`;
};

const getMinutesActiveForDay = (user, activityData, date) => {
  const userActivityForDate = activityData.find(
    (activity) => activity.date === date
  );

  if (!userActivityForDate) {
    return "No activity found for the given date.";
  }

  return userActivityForDate.minutesActive;
};

const reachedStepGoalForDay = (user, activityData, date) => {
  const userActivityForDate = activityData.find(
    (activity) => activity.userID === user.id && activity.date === date
  );

  if (!userActivityForDate) {
    return "No activity found for the given date.";
  }

  return userActivityForDate.numSteps >= user.dailyStepGoal ? "Yes" : "No";
};

const getLatestSteps = (activityData) => {
  const startDate = new Date("2023/03/24");
  const endDate = new Date("2023/07/01");

  const validEntries = activityData.filter(
    (entry) =>
      new Date(entry.date) >= startDate && new Date(entry.date) <= endDate
  );

  if (validEntries.length === 0) {
    return "No valid entries found in the given date range.";
  }

  const { numSteps: latestSteps } = validEntries.reduce((latest, current) => {
    const currentDate = new Date(current.date);
    const latestDate = new Date(latest.date);

    return currentDate > latestDate ? current : latest;
  });

  return latestSteps;
};

// Date Functions
function getCurrentDate() {
  // return dayjs(new Date()).format("YYYY/MM/DD");
  return "2023/07/01";
}

const getStartDateOfLatestWeek = (latestDate) => {
  const endDate = new Date(latestDate);
  const startDate = new Date(endDate);
  startDate.setDate(endDate.getDate() - 6);
  return startDate;
};

export {
  getUserData,
  getRandomUser,
  getCurrentDate,
  calculateAvgStepGoal,
  getAvgDailySleep,
  getAvgSleepQuality,
  getHoursSleptForDay,
  getSleepQualityForDay,
  getSleepQualityForWeek,
  getHoursSleptForWeek,
  getWeeklySleepStats,
  getLatestDateForUser,
  getAvgTotalFluid,
  getDayFluids,
  getWeeklyHydration,
  getMinutesActiveForDay,
  calculateMilesWalked,
  reachedStepGoalForDay,
  getLatestSteps,
};
