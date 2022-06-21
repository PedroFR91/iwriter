// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'iwriter-353507.firebaseapp.com',
  projectId: 'iwriter-353507',
  storageBucket: 'iwriter-353507.appspot.com',
  messagingSenderId: '1000626743339',
  appId: '1:1000626743339:web:fa4690de5645c71916626e',
  measurementId: 'G-YX1ZVRXEW0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const analytics = getAnalytics(app);
