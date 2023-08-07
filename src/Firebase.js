import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import auth from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDUkSlQsIWS9jqTowmZv3n3r8BjWiH6MMY",
    authDomain: "admin-panel-83bd0.firebaseapp.com",
    databaseURL: "https://admin-panel-83bd0-default-rtdb.firebaseio.com",
    projectId:"admin-panel-83bd0",
    storageBucket: "admin-panel-83bd0.appspot.com",
    messagingSenderId:"437303687503",
    appId: "1:437303687503:web:4de9cb3ef61a294bd96d3a"
};

const Firebase = initializeApp(firebaseConfig);
export default Firebase;