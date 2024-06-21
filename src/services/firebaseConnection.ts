import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL7yG3z8duYpEUVQdQ4tWscsgXHRSo5lA",
  authDomain: "linktree-6a25d.firebaseapp.com",
  databaseURL: "https://linktree-6a25d-default-rtdb.firebaseio.com",
  projectId: "linktree-6a25d",
  storageBucket: "linktree-6a25d.appspot.com",
  messagingSenderId: "496899349450",
  appId: "1:496899349450:web:a84ed96e3f0ecb325bcd33"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };