import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmFcUdy7i7Lj5zXFz_6wzb7UWbAckYjpc",
  authDomain: "marvel-emergency-center.firebaseapp.com",
  projectId: "marvel-emergency-center",
  storageBucket: "marvel-emergency-center.appspot.com",
  messagingSenderId: "392377890353",
  appId: "1:392377890353:web:e243c11c11b347de8ec710",
  measurementId: "G-KXLR2R5W1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);