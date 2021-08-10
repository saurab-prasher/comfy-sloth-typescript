import firebase from "firebase/app";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyC1J-vsunANhuWSpdfYKCtTn9VsbWUnOGg" ?? '',
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ?? '',
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ?? '',
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ?? '',
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ?? '',
//   appId: process.env.REACT_APP_FIREBASE_APP_ID ?? '',
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyC1J-vsunANhuWSpdfYKCtTn9VsbWUnOGg" ?? '',
  authDomain: "comfysloth-development.firebaseapp.com" ?? '',
  projectId: "comfysloth-development" ?? '',
  storageBucket: "comfysloth-development.appspot.com" ?? '',
  messagingSenderId: "1008549973419" ?? '',
  appId: "1:1008549973419:web:bcec37d29bdbafa8db16ee" ?? '',
});


export const auth = app.auth();
export default app;
