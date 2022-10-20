import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./FireBaseConfig";

const app = initializeApp(firebaseConfig);

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
