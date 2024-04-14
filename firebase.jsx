// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvVL--yTQY1xDYH0Ske8us3rq5zcEwa88",
  authDomain: "mypromospherenigeria.firebaseapp.com",
  projectId: "mypromospherenigeria",
  storageBucket: "mypromospherenigeria.appspot.com",
  messagingSenderId: "264515986823",
  appId: "1:264515986823:web:e6f1db5935e616ff6edf22",
  measurementId: "G-6R118SL509"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig); const analytics = getAnalytics(app);
export const storage = getStorage(app);


// export   {  app } 