# Karate Lesson Tracking App

## Table of content

- [Deployment](#Deployment)
- [Functionality overview](#Functionality-overview)

## Deployment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.
This application uses a Firebase Authentication and Realtime Database.

> ⚠ The configuration file required to connect to these resources is not present in this repository.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run test-cy`

Runs the cypress test suite in the console, make sure the application is running before executing this command.

## Functionality overview

- Home
  - Displays the club logo.
- Lessons
  - This page requires authentication.
  - Displays upcoming or passed lessons.
  - Each lesson has a date, location and type.
  - Passed lessons are marked Expired.
  - You can click participate to join the list of participants.
- Login
  - Login with email and password.
  - Displays email of logged in user.
  - Forget password button.
- Register
  - Register with email and password.
