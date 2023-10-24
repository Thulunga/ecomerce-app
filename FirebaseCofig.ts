// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1o7lwzKndubuQ651m6q_Bgh-wKi-wmV4",
  authDomain: "dokhona-42307.firebaseapp.com",
  projectId: "dokhona-42307",
  storageBucket: "dokhona-42307.appspot.com",
  messagingSenderId: "488872739240",
  appId: "1:488872739240:web:d871a9c75d82db7e6a1d9d",
  measurementId: "G-GHRL8G8WGB"
};

// Initialize Firebase
export const dokhona = initializeApp(firebaseConfig);
export const dokhonaAuth = getAuth(dokhona);
export const dokhonaStore = getFirestore(dokhona);
const analytics = getAnalytics(dokhona);