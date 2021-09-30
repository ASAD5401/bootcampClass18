// import {get} from 'firebase/app';
// import { getMessaging } from "firebase/messaging";
// import {initializeApp,messaging,requestPermission} from 'firebase/messaging' ;
// import firebase from "firebase"
import firebase from 'firebase';


// importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// import { initializeApp } from "firebase/app";
// import { } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-SERVICE.js'
const firebaseConfig = {
    apiKey: "AIzaSyB-mSv5ZIkxeu9U_uKkwfz3kZVf3-Yf3jY",
    authDomain: "notificationapp-b50f4.firebaseapp.com",
    projectId: "notificationapp-b50f4",
    storageBucket: "notificationapp-b50f4.appspot.com",
    messagingSenderId: "687948145709",
    appId: "1:687948145709:web:b69852d3b7428399d704a4"
};
  

//   firebase.initializeApp(firebaseConfig);
//   const messaging = firebase.messaging();

// export function initNotification() {
//   console.log("adsd")
//     Notification.requestPermission().then((permission) => { 
//         console.log(permission) 
//         if(permission === "granted"){
//             messaging.getToken().then((currentToken) => {
//                 if (currentToken) {
//                     console.log("TOKEN")
//                     console.log(currentToken);
//                 } else {
//                   console.log('No Instance ID token available. Request permission to generate one.');

//                 }
//               }).catch((err) => {
//                 console.log('An error occurred while retrieving token. ', err);
//               });
//         }
//     })
// }
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => { 
      console.log(permission) 
      if(permission === "granted"){
          messaging.getToken().then((currentToken) => {
              if (currentToken) {
                  console.log("TOKEN")
                  console.log(currentToken);
              } else {
                console.log('No Instance ID token available. Request permission to generate one.');

              }
            }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
            });
      }
  })
}