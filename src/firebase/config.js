import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "fitness-hub-d767e.firebaseapp.com",
    projectId: "fitness-hub-d767e",
    storageBucket: "fitness-hub-d767e.appspot.com",
    messagingSenderId: "1018393319532",
    appId: "1:1018393319532:web:dceedda351d2dd4b60a049"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);