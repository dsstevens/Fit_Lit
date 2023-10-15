// This is the JavaScript entry file - your code begins here
const getUserData = (users, userId) => {
  return users.find(user => user.id === userId);
};

const calculateAvgStepGoal = users => {
  const totalStepGoal = users.reduce((sum, { dailyStepGoal }) => sum + dailyStepGoal, 0); 
  return totalStepGoal / users.length;
};

const getRandomUser = (users) => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  return randomUser;
}


// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

// An example of how you tell webpack to use a JS file
import userData from './data/users';
console.log("User Data:", userData);

// Example of one way to import functions from the domUpdates file.  You will delete these examples.
import { exampleFunction1, exampleFunction2 } from './domUpdates';

exampleFunction1('Travis');
exampleFunction2('Travis')

export {
  getUserData,
  calculateAvgStepGoal,
  getRandomUser
}