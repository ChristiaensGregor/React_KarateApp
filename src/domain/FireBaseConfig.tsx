import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import firebaseOptions from "./FireBaseOptions";

const app = initializeApp(firebaseOptions);

export const auth = getAuth(app);
export const db = getDatabase(app);

/**
 * Template Firebase config
 */
export const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
