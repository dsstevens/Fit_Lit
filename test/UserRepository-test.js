import { expect } from "chai";
import {
  getUserData,
  calculateAvgStepGoal,
  getRandomUser,
  //functions to be tested, all of them
} from "../src/scripts.js";
import userData from "../src/data/users.js";

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
        {id: 2,
          name: "Tyreek VonRueden",
          address: "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
          email: "Nicolette_Halvorson43@yahoo.com",
          strideLength: 4.5,
          dailyStepGoal: 8000,
          friends: [13, 19, 3],
        },
        {id: 3,
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
    const user = getRandomUser(userData.users);   
    expect(user).to.be.an('object');
    expect(user).to.have.property('id');
  });
});

describe("calculateAvgStepGoal function", function () {
  it('should return the average step goal of all users', function() {
    const avgStepGoal = calculateAvgStepGoal(userData.users);
    expect(avgStepGoal).to.equal(6780);
  });
});

describe("getRandomUser function", function () {
  it('should return users', function() {
    const avgStepGoal = calculateAvgStepGoal(userData.users);
    expect(avgStepGoal).to.equal(6780);
  });
});
// const getUserData = (users, userId) => {
//   return users.find(user => user.id === userId);
// };
// const calculateAvgStepGoal = users => {
//   const totalStepGoal = users.reduce((sum, { dailyStepGoal }) => sum + dailyStepGoal, 0); 
//   return totalStepGoal / users.length;
// };
// const getRandomUser = (users) => {
//   const randomIndex = Math.floor(Math.random() * users.length);
//   const randomUser = users[randomIndex];
//   return randomUser;