import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0XMjVbg05ogyuzeBIZA4SWQXdKvaE6F0",
  authDomain: "notesmaker-fe94a.firebaseapp.com",
  projectId: "notesmaker-fe94a",
  storageBucket: "notesmaker-fe94a.appspot.com",
  messagingSenderId: "582705992749",
  appId: "1:582705992749:web:79d674c8ec0068044814a4",
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const auth = getAuth(app);

export default app;

