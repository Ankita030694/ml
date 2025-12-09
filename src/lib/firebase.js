import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt87ebi68brv5lGhtfvnMycLZMBT5VET4",
  authDomain: "masalalibraryy.firebaseapp.com",
  projectId: "masalalibraryy",
  storageBucket: "masalalibraryy.firebasestorage.app",
  messagingSenderId: "570815143444",
  appId: "1:570815143444:web:39e386bb3e135f4102d101",
  measurementId: "G-CW18JBSW1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, db, auth, analytics };