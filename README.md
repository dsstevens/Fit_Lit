## Introduction

This project involved creating a Fitbit or Strava-like activity tracker. We were given data for many users over a series of dates.  Our goal was to log the data and present it in an easy-to-read and well-organized fashion on a dashboard for users. The dashboard allows a user to view and see their latest activity data, goals, and milestones.

## Learning Goals

Use object and array prototype methods to perform data manipulation.
Create a user interface that is easy to use and displays information in a clear way.
Write DRY, reusable code that follows SRP and trends toward function purity.
Implement a robust testing suite using TDD.
Make network requests to retrieve data.
Collaborate productively and professionally as a team. Ensure all team members are able to be heard and contribute throughout the project.

## Technologies and Tools

Javascript
HTML
CSS
NPM
Node.JS
GitHub
GitHub Projects
JSON
Webpack

## Project Reflections

### Wins

Moving from local data files to fetch requests involved creating a function that stored the data retrieved in variables, then used those variables as arguments in the functions that update our data model. The output of those functions was stored in variables that then became arguments in the functions that updated the DOM.
Figuring out how to create this chain of data stored in variables that became arguments in functions whose output became variables that became arguments in the next set of functions was a big challenge.

Overcomming the challenges we faced using GitHib involved establishing new norms for more frequent communication and careful coordination of pushing  and merging branches.

### Challenges

Moving from using local data files to using fetch calls to retrieve data.
Creating functions that manipulate that data and then display it on page load.
Using Webpack to manage file structure and import / export statements between files.
Learning to coordinate collaboration using GitHub between 4 team members working often simultaneously on various GitHub branches was challenging.  

## Future features could include:

Go from retrieving data from a server to posting it on a server. This would allow a user to input data.

## Set Up

Fork this repo.
Clone the repo to your local machine.
CD into the root of the project directory.
Run npm install.
Run npm start.

The details of this project are outlined in [this project spec](http://frontend.turing.io/projects/fitlit.html).





