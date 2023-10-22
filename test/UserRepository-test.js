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
import userData from "../src/data/userTestData";
import hydrationData from "../src/data/hydrationTestData";
import sleepData from "../src/data/sleepTestData";
import activityData from "../src/data/activityTestData";
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
    const user = getRandomUser(userData.users);
    const userId = user.id;
    expect(user.id).to.deep.equal(userId);
    expect(user).to.have.property("id");
  });
  it("should return undefined when user id does not exist", function () {
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
        {
          userID: 2,
          date: "2023/03/27",
          numOunces: 68,
        },
        {
          userID: 2,
          date: "2023/03/28",
          numOunces: 50,
        },
        {
          userID: 2,
          date: "2023/03/29",
          numOunces: 57,
        },
        {
          userID: 2,
          date: "2023/03/30",
          numOunces: 28,
        },
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
