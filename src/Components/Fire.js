
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAzfsxrgQBY1gSPOxzzQlqTa9j0uc6L_tU",
    authDomain: "login-page-a8508.firebaseapp.com",
    projectId: "login-page-a8508",
    storageBucket: "login-page-a8508.appspot.com",
    messagingSenderId: "774544535842",
    appId: "1:774544535842:web:3403eef6931a87919c357b"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;