// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cryptox-bcf0b.firebaseapp.com",
  projectId: "cryptox-bcf0b",
  storageBucket: "cryptox-bcf0b.appspot.com",
  messagingSenderId: "530172966037",
  appId: "1:530172966037:web:ba8bb28c233fc5878fd79c",
  measurementId: "G-PRKJXV1E9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();