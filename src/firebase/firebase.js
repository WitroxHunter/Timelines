// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWyqr74V4qjhvXLcv5nvzAdJftAa5vlyg",
  authDomain: "timelines-30c81.firebaseapp.com",
  projectId: "timelines-30c81",
  storageBucket: "timelines-30c81.appspot.com",
  messagingSenderId: "798710719640",
  appId: "1:798710719640:web:586605ab5ef4ec7ad71ced",
  measurementId: "G-2EL6VHNFCQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
