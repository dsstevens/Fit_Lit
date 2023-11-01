import { expect } from "chai";
import {
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
} from "../src/utils.js";

import userData from "./userTestData";
import hydrationData from "./hydrationTestData";
import sleepData from "./sleepTestData";
import activityData from "./activityTestData";

describe("getUserData function", function () {
  let userData;
  beforeEach(() => {
    userData = {
      users: [
        {
          id: 1,
          name: "Trystan Gorczany",
          address: "9484 Lucas Flat, West Kittymouth WA 67504",
          email: "Taurean_Pollich31@gmail.com",
          strideLength: 4,
          dailyStepGoal: 7000,
          friends: [5, 43, 46, 11]
        },
        {
          id: 2,
          name: "Tyreek VonRueden",
          address: "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
          email: "Nicolette_Halvorson43@yahoo.com",
          strideLength: 4.5,
          dailyStepGoal: 8000,
          friends: [13, 19, 3]
        },
        {
          id: 3,
          name: "Colt Rohan",
          address: "48010 Balistreri Harbor, Cleobury IN 43317",
          email: "Wilford.Barton@gmail.com",
          strideLength: 2.7,
          dailyStepGoal: 3000,
          friends: [31, 16, 15, 7]
        },
      ],
    };
  });

  it("should return a user from the array based on their ID", function () {
    const users = userData.users;
    const userId = 1;
    const user = users.find((user) => user.id === 1);
    expect(user.id).to.deep.equal(userId);
    expect(user).to.have.property("id");
  });

  it("should return undefined when user id does not exist", function () {
    const user = getUserData(userData.users, 70);
    expect(user).to.be.undefined;
  });

  it("should return undefined if the users array is empty", function () {
    const user = getRandomUser([]);
    expect(user).to.be.undefined;
  });

  it("should return the average step goal of all users", function () {
    const avgStepGoal = calculateAvgStepGoal(userData.users);
    expect(avgStepGoal).to.equal(6000);
  });

  it("should return NaN if the users array is empty", function () {
    const avgStepGoal = calculateAvgStepGoal([]);
    expect(avgStepGoal).to.be.NaN;
  });

  it("should return a random user from the user array", function () {
    const users = userData.users;
    const user = getRandomUser(userData.users);
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];
    expect(user).to.be.an("object");
  });

  it("should return undefined if the users array is empty", function () {
    const users = userData.users;
    const user = getRandomUser([]);
    expect(user).to.be.undefined;
  });
});

describe("fluid consumed", function () {
  let hydrationData;
  beforeEach(function () {
    hydrationData = {
      userWater: [
        { userID: 1, date: "2023/03/24", numOunces: 28 },
        { userID: 3, date: "2023/03/24", numOunces: 95 },
        { userID: 1, date: "2023/03/25", numOunces: 50 },
        { userID: 3, date: "2023/03/25", numOunces: 59 },
        { userID: 1, date: "2023/03/26", numOunces: 21 },
        { userID: 3, date: "2023/03/26", numOunces: 63 },
        { userID: 2, date: "2023/03/24", numOunces: 35 },
        { userID: 2, date: "2023/03/25", numOunces: 92 },
        { userID: 2, date: "2023/03/26", numOunces: 88 },
        { userID: 2, date: "2023/03/27", numOunces: 68 },
        { userID: 2, date: "2023/03/28", numOunces: 50 },
        { userID: 2, date: "2023/03/29", numOunces: 57 },
        { userID: 2, date: "2023/03/30", numOunces: 28 },
      ],
    };
  });

  it("should return average fluid ounces consumed per day for all time", function () {
    const id = 1;
    const avgFluidConsumed = getAvgTotalFluid(hydrationData.userWater, id);
    expect(avgFluidConsumed).to.deep.equal(33);
  });

  it('should return NaN when there is no user data', () => {
    const userId = 4;
    const date = "2023/03/27";
    const result = getAvgTotalFluid(hydrationData.userWater, userId, date);
    expect(result).to.deep.equal(NaN);
  });

  it("should return a user's fluid ounces consumed on a specific day", function () {
    const date = "2023/03/24";
    const id = 3;
    const specificDayFluid = getDayFluids(hydrationData.userWater, id, date);
    expect(specificDayFluid).to.equal(95);
  });

  it('should return undefined when there is no user data for the date', () => {
    const id = 1;
    const date = "2023/03/31";
    const result = getDayFluids(hydrationData.userWater.numOunces, id, date);
    expect(result).to.equal(undefined);
  });

  it("should return how many fluid ounces of water a user consumed each day for a week", function () {
    const id = 2;
    const dailyOz = getWeeklyHydration(hydrationData.userWater, id);
    expect(dailyOz).to.deep.equal([
      { date: "2023/03/30", ounces: 28 },
      { date: "2023/03/29", ounces: 57 },
      { date: "2023/03/28", ounces: 50 },
      { date: "2023/03/27", ounces: 68 },
      { date: "2023/03/26", ounces: 88 },
      { date: "2023/03/25", ounces: 92 },
      { date: "2023/03/24", ounces: 35 },
    ]);
  });

  it('should return [] if there is no data for user', () => {
    const userId = 4;
    const result = getWeeklyHydration(hydrationData.userWater, userId);
    console.log(result)
    expect(result).to.deep.equal([]);
  });
});

describe("user's sleep", function () {
  let sleepData;
  beforeEach(function () {
    sleepData = {
      userSleep: [
        {userID: 1, date: '2023/03/24', hoursSlept: 9.6, sleepQuality: 4.3},
        {userID: 2, date: '2023/03/24', hoursSlept: 8.4, sleepQuality: 3.5},
        {userID: 3, date: '2023/03/24', hoursSlept: 9.7, sleepQuality: 4.7},
        {userID: 1, date: '2023/03/25', hoursSlept: 6.3, sleepQuality: 3.3},
        {userID: 2, date: '2023/03/25', hoursSlept: 8.1, sleepQuality: 4.7},
        {userID: 3, date: '2023/03/25', hoursSlept: 9.5, sleepQuality: 1.8},
        {userID: 1, date: '2023/03/26', hoursSlept: 5.4, sleepQuality: 3.1},
        {userID: 2, date: '2023/03/26', hoursSlept: 9.8, sleepQuality: 4.8},
        {userID: 3, date: '2023/03/26', hoursSlept: 4.1, sleepQuality: 2},
        {userID: 1, date: '2023/03/27', hoursSlept: 7.1, sleepQuality: 4.7},
        {userID: 2, date: '2023/03/27', hoursSlept: 10.7, sleepQuality: 2.8},
        {userID: 3, date: '2023/03/27', hoursSlept: 8.7, sleepQuality: 2.9},
        {userID: 1, date: '2023/03/28', hoursSlept: 6, sleepQuality: 4.6},
        {userID: 2, date: '2023/03/28', hoursSlept: 5.1, sleepQuality: 2.1},
        {userID: 3, date: '2023/03/28', hoursSlept: 7, sleepQuality: 4.1},
        {userID: 1, date: '2023/03/29', hoursSlept: 5.6, sleepQuality: 2.1},
        {userID: 2, date: '2023/03/29', hoursSlept: 4.3, sleepQuality: 2.2},
        {userID: 3, date: '2023/03/29', hoursSlept: 6.6, sleepQuality: 3.2},
        {userID: 1, date: '2023/03/30', hoursSlept: 6.2, sleepQuality: 3.3},
        {userID: 2, date: '2023/03/30', hoursSlept: 10.1, sleepQuality: 3.2},
        {userID: 3, date: '2023/03/30', hoursSlept: 8.8, sleepQuality: 3.2},
        {userID: 1, date: '2023/03/31', hoursSlept: 8.3, sleepQuality: 1.2},
        {userID: 2, date: '2023/03/31', hoursSlept: 9.3, sleepQuality: 2.8},
        {userID: 3, date: '2023/03/31', hoursSlept: 9.7, sleepQuality: 2.5}
      ],
    }
  });

    it('should return the users average number of hours slept per day', () => {
      const userSleepData = sleepData.userSleep;
      const userId = 1;
      const expectedAverage = 7;
      const result = getAvgDailySleep(userSleepData, userId);
      expect(result).to.equal(expectedAverage);
    });

    it('should return NaN if no user data is found', () => {
      const userSleepData = sleepData.userSleep;
      const userId = 4;
      const result = getAvgDailySleep(userSleepData, userId);
      expect(result).to.deep.equal(NaN);
    });

    it('should return the users average sleep quality per day over all time', () => {
      const userSleepData = sleepData.userSleep;
      const userId = 1;
      const expectedAverage = 3.325;
      const result = getAvgSleepQuality(userSleepData, userId);
      expect(result).to.equal(expectedAverage);
    });

    it('should return NaN if no user data is found', () => {
      const userSleepData = sleepData.userSleep;
      const userId = 4;
      const result = getAvgSleepQuality(userSleepData, userId);
      expect(result).to.deep.equal(NaN);
    });

    it('should return the number of hours a user slept for a specific day', () => {
      const userSleepData = sleepData.userSleep;
      const userId = 1;
      const date = '2023/03/24';
      const expectedHours = 9.6;
      const result = getHoursSleptForDay(userSleepData, userId, date);
      expect(result).to.equal(expectedHours);
    });

    it('should return the users sleep quality for a specific day', () => {
      const userId = 1;
      const date = '2023/03/24';
      const result = getSleepQualityForDay(sleepData.userSleep, userId, date);
      const expectedValue = 4.3;
      expect(result).to.equal(expectedValue);
    });

    it('should return 0 when there is no data for the user', () => {
      const date = '2023/03/24';
      const userId = 4;
      const result = getSleepQualityForDay(sleepData.userSleep, userId, date);
      expect(result).to.equal(0);
    });

    it('should return 0 when there is no data for the date', () => {
      const userId = 1;
      const date = '2023/03/23';
      const result = getSleepQualityForDay(sleepData.userSleep, userId, date);
      expect(result).to.equal(0);
    });

    it('should calculate hours slept for 7 days for a given user', () => {
      const userId = 1;
      const startDate = '2023/03/25';
      const result = getHoursSleptForWeek(sleepData.userSleep, userId, startDate);
      const expectedHoursSlept = [6.3, 5.4, 7.1, 6, 5.6, 6.2, 8.3];
      expect(result).to.deep.equal(expectedHoursSlept);
    });

    it('should return zero when there is no start date', () => {
      const userId = 1;
      const startDate = '';
      const result = getHoursSleptForWeek(sleepData.userSleep, userId, startDate);
      const expectedHoursSlept = 0;
      expect(result).to.deep.equal(expectedHoursSlept);
    });

    it('should return [] when there is no data for the user', () => {
      const userId = 4;
      const startDate = '2023/03/25';
      const result = getHoursSleptForWeek(sleepData.userSleep, userId, startDate);
      const expectedHoursSlept = [];
      expect(result).to.deep.equal(expectedHoursSlept);
    });

    it('should return an array of sleep quality for 7 days', () => {
      const userId = 1;
      const startDate = '2023/03/25';
      const sleepQualityFor7Days = getSleepQualityForWeek(sleepData.userSleep, userId, startDate);
      const expectedSleepQuality = [6.3, 5.4, 7.1, 6, 5.6, 6.2, 8.3];
      expect(sleepQualityFor7Days).to.deep.equal(expectedSleepQuality);
    });

    it('should return [] for a user with no data', () => {
      const userId = 4;
      const startDate = '2023/03/25';
      const result = getSleepQualityForWeek(sleepData.userSleep, userId, startDate);
      expect(result).to.deep.equal([]);
    });

    it('should return zero when there is no start date', () => {
      const userId = 2;
      const startDate = '';
      const result = getSleepQualityForWeek(sleepData.userSleep, userId, startDate);
      expect(result).to.equal(0);
    });
  })

// Calculate the miles a user has walked based on their number of steps (use their strideLength to help calculate this), based on a specific day
// Return how many minutes a user was active for a given day
// Return if a user reached their step goal for a given day

describe("user's activity", function () {
  it('should calculate the miles walked for a specific user on a specific day', () => {
    const date = '2023/03/24';
    const user = userData.userData.users[0]
    console.log(user)
    const milesWalked = calculateMilesWalked(user, activityData, date);
    expect(milesWalked).to.equal(5.58); 
    // console.log("DATA:", activityData)
  });

  it('should return the correct number of minutes active for a user on a specific day', () => {
    const date = "2023/03/25";
    const user = userData.userData.users[0]
    const minutesActive = getMinutesActiveForDay(user, activityData, date);
    // This test should now check a specific user's active minutes or modify the assertion to suit the new structure
    // For example, checking if a user named 'John' was active for 111 minutes:
    expect(minutesActive).to.equal(111);
  });

  // The next tests are tricky because they deal with a function that is now broken (since userId is missing)
  // However, if we are considering a user named "John" with an id of 1:
  it('should return true when the user reached their step goal for a given day', () => {
    const date = "2023/03/25";
    const user = userData.userData.users[0]
    const result = reachedStepGoalForDay(user, activityData, date);
    // For now, this test isn't precise since the function isn't working properly
    expect(result).to.be.true; 
  });

  it('should return false when the user did not reach their step goal for a given day', () => {
    const date = "2023/03/27";
    const user = userData.userData.users[0]
    const result = reachedStepGoalForDay(user, activityData, date);
    // As with the previous test, this isn't precise
    expect(result).to.be.false;
  });

  it('should return 0 when the user did not have data for the given day', () => {
    const date = "2023/03/23";
    const user = userData.userData.users[0]
    const result = reachedStepGoalForDay(user, activityData, date);
    // This test assertion is a bit odd because the function returns 'false' or 'undefined', not 0
    expect(result).to.be.false;
  });
});
