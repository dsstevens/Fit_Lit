import { expect } from "chai";
import {
  getUserData,
  calculateAvgStepGoal,
  getRandomUser,
  getAvgTotalFluid,
  getDayFluids,
  getWeeklyHydration
  //all functions to be tested
} from "../test/functionsToTest";
// import userData from "../src/data/users.js";
// import hydrationData from "../src/data/hydration.js";  

import userData from "../src/data/userTestData";
import hydrationData from "../src/data/hydrationTestData";
import sleepData from "../src/data/sleepTestData";
import activityData from "../src/data/testData";

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
        { id: 1,
          name: "Trystan Gorczany",
          address: "9484 Lucas Flat, West Kittymouth WA 67504",
          email: "Taurean_Pollich31@gmail.com",
          strideLength: 4,
          dailyStepGoal: 7000,
          friends: [5, 43, 46, 11],
        },
        { id: 2,
          name: "Tyreek VonRueden",
          address: "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
          email: "Nicolette_Halvorson43@yahoo.com",
          strideLength: 4.5,
          dailyStepGoal: 8000,
          friends: [13, 19, 3],
        },
        { id: 3,
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

  it('should return a user from the array based on their ID', function() {
    const users = userData.users;
    const userId = 1;
    const user = users.find(user => user.id === 1);
    expect(user.id).to.deep.equal(userId);
    expect(user).to.have.property('id');
  });

  // const getUserData = (users, userId) => {
  //   return users.find(user => user.id === userId);
  // };

  it('should return undefined when user id does not exist', function () {
    const user = getUserData(userData.users, 70);
    expect(user).to.be.undefined;
  });

  it('should return undefined if the users array is empty', function () {
    const user = getRandomUser([]);
    expect(user).to.be.undefined;
  });

  it('should return the average step goal of all users', function() {
    const avgStepGoal = calculateAvgStepGoal(userData.users);
    expect(avgStepGoal).to.equal(6000);
  });

  it('should return NaN if the users array is empty', function () {
    const avgStepGoal = calculateAvgStepGoal([]);
    expect(avgStepGoal).to.be.NaN;
  });

  it('should return a random user from the user array', function() {
    const users = userData.users;
    const user = getRandomUser(userData.users);   
    const randomIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomIndex];
    expect(user).to.be.an('object');
  });
  // const getRandomUser = (users) => {
  //   const randomIndex = Math.floor(Math.random() * users.length);
  //   const randomUser = users[randomIndex];
  //   return randomUser;
  // };
  it('should return undefined if the users array is empty', function() {
    const users = userData.users;
    const user = getRandomUser([]);   
    expect(user).to.be.undefined;
  });
});

describe("calculateAvgStepGoal function", function () {
});

describe("getRandomUser function", function () {
});

describe("fluid consumed", function () {
  let hydrationData;

  beforeEach(function () {
    hydrationData = {
      userWater: [
        { "userID": 1,
          "date": "2023/03/24",
          "numOunces": 28
        },
        { "userID": 2,
          "date": "2023/03/24",
          "numOunces": 35
        },
        { "userID": 3,
          "date": "2023/03/24",
          "numOunces": 95
        }, 
        { "userID": 1,
          "date": "2023/03/25",
          "numOunces": 50
        },
        { "userID": 2,
          "date": "2023/03/25",
          "numOunces": 92
        },
        { "userID": 3,
          "date": "2023/03/25",
          "numOunces": 59
        },
        { "userID": 1,
          "date": "2023/03/26",
          "numOunces": 21
        },
        { "userID": 2,
          "date": "2023/03/26",
          "numOunces": 88
        },
        { "userID": 3,
          "date": "2023/03/26",
          "numOunces": 63
        },
      ],
    };
  });
  
  it('should return average fluid ounces consumed per day for all time', function () {
    const id = 1;
    const avgFluidConsumed = getAvgTotalFluid(hydrationData.userWater, id);
    expect(avgFluidConsumed).to.deep.equal(33);
  });
});

// //input: array of avg daily water ounces per user id
// //output: number that's an avg
// //how?
// //take user.id, filter the array by the user id and turn into a new array
// //over the returned array, average all the numOunces / length of the array
// // const getAvgTotalFluid = (data, id) => {
// //   const hydrationEntries = data.filter((entry) => entry.userID === id)
// //   console.log(hydrationEntries.length)
// //   const hydrationAvg = hydrationEntries.reduce((acc, user) => {
// //     return (acc += user.numOunces)
// //   }, 0)
// //   return Math.round(hydrationAvg / hydrationEntries.length)
// // }
// // console.log(getAvgTotalFluid(hydrationData, 1))

// // Return the user’s average fluid ounces consumed per day for all time
// // Return the user’s fluid ounces they consumed for a specific day
// // Return how many fluid ounces of water a user consumed each day over the course of a week (7 days)
// // All functions requiring a specific user’s data should be identified by their userID. Also note that all functions returning data for a specific day should be identified by a date.