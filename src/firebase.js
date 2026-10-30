import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAy0PcmKZEuZlxe2RiETdGLRkDwMWyJrU",
  authDomain: "kalendarz-imprez-293aa.firebaseapp.com",
  projectId: "kalendarz-imprez-293aa",
  storageBucket: "kalendarz-imprez-293aa.firebasestorage.app",
  messagingSenderId: "931389584664",
  appId: "1:931389584664:web:e3af497a64ddce43d29a6d",
  measurementId: "G-25J7ZHQM93"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
