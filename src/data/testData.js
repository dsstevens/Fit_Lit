// it looks like the easiest way to do the export statements without a lot of fuss is going to be to put each in its own file
export default {
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
    }
  ],
},

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
    }
  ],
},

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
},

activityData = {
  userActivity: [
    {userID: 1, date: '2023/03/24', numSteps: 7362, minutesActive: 261, flightsOfStairs: 26},
    {userID: 2, date: '2023/03/24', numSteps: 3049, minutesActive: 125, flightsOfStairs: 43},
    {userID: 3, date: '2023/03/24', numSteps: 12970, minutesActive: 282, flightsOfStairs: 38},
    {userID: 1, date: '2023/03/25', numSteps: 14264, minutesActive: 111, flightsOfStairs: 1},
    {userID: 2, date: '2023/03/25', numSteps: 14719, minutesActive: 201, flightsOfStairs: 39},
    {userID: 3, date: '2023/03/25', numSteps: 12255, minutesActive: 245, flightsOfStairs: 46},
    {userID: 1, date: '2023/03/26', numSteps: 8646, minutesActive: 32, flightsOfStairs: 31},
    {userID: 2, date: '2023/03/26', numSteps: 9543, minutesActive: 203, flightsOfStairs: 34},
    {userID: 3, date: '2023/03/26', numSteps: 10676, minutesActive: 153, flightsOfStairs: 28},
    {userID: 1, date: '2023/03/27', numSteps: 5405, minutesActive: 54, flightsOfStairs: 42},
    {userID: 2, date: '2023/03/27', numSteps: 12127, minutesActive: 120, flightsOfStairs: 3},
    {userID: 3, date: '2023/03/27', numSteps: 2383, minutesActive: 285, flightsOfStairs: 38},
    {userID: 1, date: '2023/03/28', numSteps: 8638, minutesActive: 123, flightsOfStairs: 26},
    {userID: 2, date: '2023/03/28', numSteps: 5494, minutesActive: 89, flightsOfStairs: 46},
    {userID: 3, date: '2023/03/28', numSteps: 6327, minutesActive: 297, flightsOfStairs: 27},
    {userID: 1, date: '2023/03/29', numSteps: 9608, minutesActive: 53, flightsOfStairs: 22},
    {userID: 2, date: '2023/03/29', numSteps: 6959, minutesActive: 269, flightsOfStairs: 16},
    {userID: 3, date: '2023/03/29', numSteps: 2378, minutesActive: 219, flightsOfStairs: 11},
    {userID: 1, date: '2023/03/30', numSteps: 14960, minutesActive: 52, flightsOfStairs: 4},
    {userID: 2, date: '2023/03/30', numSteps: 4676, minutesActive: 288, flightsOfStairs: 5},
    {userID: 3, date: '2023/03/30', numSteps: 2940, minutesActive: 59, flightsOfStairs: 32},
    {userID: 1, date: '2023/03/31', numSteps: 2321, minutesActive: 111, flightsOfStairs: 33},
    {userID: 2, date: '2023/03/31', numSteps: 14985, minutesActive: 207, flightsOfStairs: 44},
    {userID: 3, date: '2023/03/31', numSteps: 2837, minutesActive: 85, flightsOfStairs: 29}
  ],
}
};