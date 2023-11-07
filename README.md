## Abstract

This is a user-friendly app inspired by fitness tracking apps like Fitbit or Strava as outlined in [this project spec](http://frontend.turing.io/projects/fitlit.html). Using remote data sets of users and their daily entries of information, we managed to integrate fitness and hydration logs into a dashboard to display for any user. The purpose of FitLit was to take user datasets and display it for individual users in an easy to understand visual representation. The dashboard allows a user to view and see their latest activity data, goals, and hydration intake.

## Learning Goals

- Use object and array prototype methods to perform data manipulation.
- API fetch calls to retrieve data.
- Write DRY, reusable code that follows SRP and trends toward function purity.
- Implement a robust testing suite using TDD.
- Understanding closure functions and introducing them appropriately.
- Collaborate productively and professionally as a team. Ensure all team members are able to be heard and contribute throughout the project.

## Preview of App
<img src="https://i.imgur.com/uN96sFM.png" width="1012" height="531" alt="Screenshot of Fit Lit App">

## Context
### Tools
Javascript, HTML, CSS, NPM, Node.JS, GitHub, GitHub Projects, JSON, Webpack, Mocha, Chai, DayJS, WAVE
# Timeline
This is a mod 2 student project done in two parts in a two week sprint by four people. 
# Collaborators
- [Gavin Garcia](https://github.com/EGavinG)
- [Deanna Stevens](https://github.com/dsstevens)
- [Dan Waverly](https://github.com/wlavery22)
- [Bobby Steckline](https://github.com/rjsturing)

## Installation
- Click the green `code` button.
- Copy the SSH link to your clipboard.
- Open the terminal on your local machine.
- Change into the directory that you wish to clone the app into with the cd command.
- Install the npm dependency by typing `npm install` on the command line in terminal.
- Start the webpack by typing `npm start` into the terminal.
- Copy the link it provides that will look like this: [http:localhost:8080]() 
- Paste that code into your web browser.
- On a separate tab, navigate to [this page](https://github.com/turingschool-examples/fitlit-api) which has the server that will be necessary to run on your local machine. 
- Follow the first steps of copying and cloning that SSH code into your terminal.
- Run `npm install` and `npm start`.
- You should see that the local server is now running and which provides the data to populate on the 8080 site.
- Enjoy using an activity tracking application!

### Wins

- Learning how to implement fetch requests and no longer using local data files which involved creating a function that stored the data. 
- Posting new data for hydration.
- Created and implemented a stopwatch timer with asynchronous Javascript.
- Writing and implementing our first usability test, gathering information and using feedback.
- Learning about Promises and promiseAll().
- Learning about Webpack and how to utilize imports and exports.
- Overcoming the challenges we faced using GitHib involved establishing new norms for more frequent communication and careful coordination of pushing and merging branches.
- Keeping accessibility in mind during the app rendering phase on the DOM.
- Utilizing GitHub projects and creating a board with issue tickets linked to pull requests.
- Reaching out to mentors and having frequent checkins while learning new tools.

### Challenges
- TDD
- Accurately POSTing new information with adequate error handling to guide the UX.
- Developing a concept for a login which was a huge undertaking with refactoring our functionality.
- Naming conventions and effectively tracking variables and functions across multiple files.
- Understanding code written by others.
- Utilizing iterator methods in our ES6 JS functions.
- Moving from using local data files to using fetch calls to retrieve data.
- PromiseAll() and missing a return that made us question our understanding of a new method.
- Using Webpack to manage file structure and import / export statements between files.
- Learning to coordinate collaboration using GitHub between four team members working simultaneously on multiple branches.

## Future features could include:
- Building user interactivity allowing them to not only add new input for one activity but also manipulate data.
- Complete the login and develop a login view which persists for the user upon refresh.
- Giving the user more information on login such as a motivational quote or a competitive incentive with other app users.

