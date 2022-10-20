import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEoncxERUq1chncwKTnCt3tloyJOYJFXo",
  authDomain: "karate-lessons-8c130.firebaseapp.com",
  databaseURL: "https://karate-lessons-8c130-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "karate-lessons-8c130",
  storageBucket: "karate-lessons-8c130.appspot.com",
  messagingSenderId: "122597012075",
  appId: "1:122597012075:web:ac3ee409cf535ec5b7b72e",
};
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
