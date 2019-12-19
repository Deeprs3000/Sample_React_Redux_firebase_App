# React-Redux-Firebase-ContactApp

## About the Application
* It is react, redux, and firebase based sample application.
* It is web application which supports mobile view as well as browser.
* It is linked with google firebase to store/retrieve the data in realtime.
* It will list the contacts available in the firebase database and allow to create a new contact.
* It also allow to modify the existing contact, view the details of a contact and search the contacts in the list.
* It has the theming options as well. So, user can select one of the listed theme.

## Prerequisite
* NodeJS 10 or higher
* Firebase Account (One account is already configured, but you can also use your own firebase account.)

## How to configure Firebase Account in the Application
* Login to your firebase account
* Create a new app (for web) in firebase
* Create a new database (realtime database) with name "users"
* Create a new table with name "user" and the fields "address", "contact", "date", "email", "id", "name". All fields should be of string type
* Enable read/write access under the database rules
* update your firebase account details in the application in "src/utils/firebase.js"

## How to Run the Application
* Download the source code
* execute command "npm install" in root folder of the application to the install dependencies.
* execute command "npm start" in root folder of project to start the application.
* It will launch the application on browser with the url "http://localhost:3000/"

## How to Run the Test Cases
* execute command "npm run test" in root folder of project to execute test cases.

## Tech Stack Used
* React
* Redux
* Hooks
* Firebase
* Material UI
* Jest
* Enzyme
* ES6/ES7

## Salient Features
* Integrated with firebase database that gives updated results in realtime.
* React hooks methods implemented for better performance.
* Material UI has been implemented for better User Experience.
* Proper Unit Test has been writtern for components, actions, reducers, etc.
* Theming options has been implemented.