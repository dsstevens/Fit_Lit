import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar);
dayjs.extend(require("dayjs/plugin/utc"));

//DATA FUNCTION DECLARATIONS ONLY!
const currentDate = getCurrentDate();

//MOVED FROM FUNCTIONS TO TEST: 
// USER DATA FUNCTIONS

const getUserData = (users, userId) => {
  return users.find((user) => user.id === userId);
};

const calculateAvgStepGoal = (users) => {
  const totalStepGoal = users.reduce(
    (sum, { dailyStepGoal }) => sum + dailyStepGoal,
    0
  );
  return totalStepGoal / users.length;
};

const getRandomUser = (users) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  return randomUser;
};

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ [MILES USER HAS WALKED] 
//this passes the test but not sure if it'll be dynamic enough, GPT REALLY HELPED WITH THIS ONE, PLEASE TAKE A LOOK
const calculateMilesWalked = (userInfo, activityData, date) => {
  const userActivityForDate = activityData.userActivity.find(activity => activity.date === date)

  if (!userActivityForDate) {
    return "No activity found for the given date."
  }

  const user = userInfo.users.find(u => u.id === userActivityForDate.userID)


  if (!user) {
    return "User not found."
  }

  const miles = (user.strideLength * userActivityForDate.numSteps) / 5280
  return `Miles walked: ${miles.toFixed(2)}`
}

// console.log(calculateMilesWalked(userInfo, activityData, "2023/03/24"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ [DAILY ACTIVE MINS] 
const getMinutesActiveForDay = (userInfo, activityData, date) => {
  if (!activityData || !userInfo || !date) {
    return undefined;
  }

  const results = {};

  userInfo.users.forEach(user => {
    const userActivityData = activityData.userActivity.find(
      data => data.userID === user.id && data.date === date
    );

    results[user.name] = userActivityData ? userActivityData.minutesActive : 0;
  });

  return results;
}

// console.log(getMinutesActiveForDay(userInfo, activityData, "2023/03/24"));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ [STEP GOAL REACHED 2.0!!!!!!]
//refactor function and test to remove the userId param
const reachedStepGoalForDay = (activityData, userInfo, date) => {
  if (!activityData || !userInfo || !date) {
    return undefined
  }
  const user = userInfo.users.find(user => user.id === userId);
  if (!user) return false
  const stepGoal = user.dailyStepGoal
  const userActivityData = activityData.userActivity.find (
    data => data.userID === userId && data.date === date
  )
  if (!userActivityData) return false
  return userActivityData.numSteps >= stepGoal
  //return boolean
};
//scripts
// reachedStepGoalForDay(activityData, usersData,  currentDate)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ [STEP GOAL REACHED]

// const didUserMeetStepGoal = (userInfo, activityData, date) => {
//   if (!activityData || !userInfo || !date) {
//     return undefined;
//   }

//   const results = {};

//   userInfo.users.forEach(user => {
//     const userActivityData = activityData.userActivity.find(
//       data => data.userID === user.id && data.date === date
//     );

//     if (userActivityData) {
//       results[user.name] = userActivityData.numSteps >= user.dailyStepGoal;
//     } else {
//       results[user.name] = false;
//     }
//   });

//   return results;
// }





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
  getSleepQualityForWeek,
  getCurrentDate,
  getStartDateOfLatestWeek,
  getAvgHoursSlept,
  getWeeklySleepStats,
  calculateMilesWalked,
  getMinutesActiveForDay,
  reachedStepGoalForDay
};
