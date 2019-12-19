import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDfX5-5NcVZGFIoCa_YMA6jfFuj9rNTk9c",
    authDomain: "contact-app-react.firebaseapp.com",
    databaseURL: "https://contact-app-react.firebaseio.com",
    projectId: "contact-app-react",
    storageBucket: "contact-app-react.appspot.com",
    messagingSenderId: "396187099355",
    appId: "1:396187099355:web:be9ec791406f9dcdfd6cfe"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const dataBaseName = 'users';