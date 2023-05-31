import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkd_X4FfOOYPCgS5tP2Q0A4-7GvCwcHHM",
  authDomain: "todo-hasura-903e9.firebaseapp.com",
  projectId: "todo-hasura-903e9",
  storageBucket: "todo-hasura-903e9.appspot.com",
  messagingSenderId: "723255278285",
  appId: "1:723255278285:web:a5ec92f684bfb77d43c784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
