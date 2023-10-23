import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar);
dayjs.extend(require("dayjs/plugin/utc"));

//DATA FUNCTION DECLARATIONS ONLY!
const currentDate = getCurrentDate();
// HYDRATION FUNCTIONS

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

// DATE Function:
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
  getAvgTotalFluid,
  getDayFluids,
  getWeeklyHydration,
  getAvgDailySleep,
  getAvgSleepQuality,
  getHoursSleptForDay,
  getSleepQualityForDay,
  getHoursSleptForWeek,
  getSleepQualityForWeek,
  getCurrentDate,
  getStartDateOfLatestWeek,
  getAvgHoursSlept,
  getWeeklySleepStats,
};
