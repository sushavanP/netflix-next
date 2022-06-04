// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVqXkd-vTzJqxzEZbES0AuXz4iiuMbI5Y",
  authDomain: "netflix-next-55277.firebaseapp.com",
  projectId: "netflix-next-55277",
  storageBucket: "netflix-next-55277.appspot.com",
  messagingSenderId: "196055450126",
  appId: "1:196055450126:web:5294b7cecd9c222dc6f25f",
  measurementId: "G-KZ5SRFPLWS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }