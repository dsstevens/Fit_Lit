import { expect } from "chai";
import {
  getUserData,
  calculateAvgStepGoal,
  getRandomUser,
  getAvgTotalFluid,
  getDayFluids,
  getWeeklyHydration,
  //all functions to be tested
} from "../test/functionsToTest";
// import userData from "../src/data/users.js";
// import hydrationData from "../src/data/hydration.js";  

import userData from "../src/data/userTestData.js";
import sleepData from "../src/data/sleepTestData.js";
import hydrationData from "../src/data/hydrationTestData.js";
import activityData from "../src/data/activityTestData.js";

// describe("User Repository", () => {
//   it("should run tests", function () {
//     expect(true).to.be(true);
//   });
// });

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
          friends: [5, 43, 46, 11],
        },
        {
          id: 2,
          name: "Tyreek VonRueden",
          address: "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
          email: "Nicolette_Halvorson43@yahoo.com",
          strideLength: 4.5,
          dailyStepGoal: 8000,
          friends: [13, 19, 3],
        },
        {
          id: 3,
          name: "Colt Rohan",
          address: "48010 Balistreri Harbor, Cleobury IN 43317",
          email: "Wilford.Barton@gmail.com",
          strideLength: 2.7,
          dailyStepGoal: 3000,
          friends: [31, 16, 15, 7],
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

  it('should return undefined when user id does not exist', function () {
    const user = getUserData(userData.users, 70);
    expect(user).to.be.undefined;
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

describe("calculateAvgStepGoal function", function () {});

describe("getRandomUser function", function () {});

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

  it("should return a user's fluid ounces consumed on a specific day", function () {
    const date = "2023/03/24";
    const id = 3;
    const specificDayFluid = getDayFluids(hydrationData.userWater, id, date);
    expect(specificDayFluid).to.equal(95);
  });

  it("should return how many fluid ounces of water a user consumed each day for a week", function () {
    const id = 2;
    const dailyOz = getWeeklyHydration(hydrationData.userWater, id);
    expect(dailyOz).to.deep.equal([
      { date: "2023/03/24", ounces: 35 },
      { date: "2023/03/25", ounces: 92 },
      { date: "2023/03/26", ounces: 88 },
      { date: "2023/03/27", ounces: 68 },
      { date: "2023/03/28", ounces: 50 },
      { date: "2023/03/29", ounces: 57 },
      { date: "2023/03/30", ounces: 28 },
    ]);
  });
});

describe("fluid consumed", function () {
  let hydrationData;
  beforeEach(function () {
    hydrationData = {
      userWater: [

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

    it("return the users average number of hours slept per day", () => {
      expect(getAvgSleep(sleepData, 1)).to.equal(6.8);
      expect(getAvgSleep(sleepData, 2)).to.equal(8.2);
    });

    it('should return 0 if no user data is found', () => {
      expect(getAvgSleep(sleepData, 4)).to.equal(0);
    });

    
  
    
   
   
  

  
    