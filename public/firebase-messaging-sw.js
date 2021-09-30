// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-mSv5ZIkxeu9U_uKkwfz3kZVf3-Yf3jY",
  authDomain: "notificationapp-b50f4.firebaseapp.com",
  projectId: "notificationapp-b50f4",
  storageBucket: "notificationapp-b50f4.appspot.com",
  messagingSenderId: "687948145709",
  appId: "1:687948145709:web:b69852d3b7428399d704a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 
firebase.messaging()