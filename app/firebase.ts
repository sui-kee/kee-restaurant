// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjD5kGwIamycH6n8uu_V_shtfjIVwjC7s",
  authDomain: "kee-restaurant.firebaseapp.com",
  projectId: "kee-restaurant",
  storageBucket: "kee-restaurant.appspot.com",
  messagingSenderId: "879229802002",
  appId: "1:879229802002:web:65d82f428abfba0c5d6acb",
  measurementId: "G-QHQKX04FRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();