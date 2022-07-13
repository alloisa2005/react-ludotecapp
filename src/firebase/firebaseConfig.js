
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrOUBe5FSM6ZcAYyz7AxWCVdyUDN2k7AM",
  authDomain: "ludotecapp-aeaa0.firebaseapp.com",
  projectId: "ludotecapp-aeaa0",
  storageBucket: "ludotecapp-aeaa0.appspot.com",
  messagingSenderId: "783634014816",
  appId: "1:783634014816:web:804731dab6bb87e2b19905"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);