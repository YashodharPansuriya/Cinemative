import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9ZPKr1_Y77LvGtBvvDhInNjzvNPgtR5M",
  authDomain: "netflix-clone-28ddf.firebaseapp.com",
  projectId: "netflix-clone-28ddf",
  storageBucket: "netflix-clone-28ddf.appspot.com",
  messagingSenderId: "461785498958",
  appId: "1:461785498958:web:1ababef533f2d3f9444a1f",
  measurementId: "G-BKB1M6KK5W"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);