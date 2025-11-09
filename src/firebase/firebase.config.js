// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVNOL8InquM6LvQ4qIIiuQT_ENiBgDYTM",
  authDomain: "pawmart-client.firebaseapp.com",
  projectId: "pawmart-client",
  storageBucket: "pawmart-client.firebasestorage.app",
  messagingSenderId: "454740691275",
  appId: "1:454740691275:web:ba6f6a849f8a4ffaa700ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);