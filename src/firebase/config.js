import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDXyGDoTTdWqcHD4UWoE1a-t9gOrS4WJa4",
  authDomain: "haybgram.firebaseapp.com",
  projectId: "haybgram",
  storageBucket: "haybgram.appspot.com",
  messagingSenderId: "619017908649",
  appId: "1:619017908649:web:26f1f5bfa73aefb38454b8",
  measurementId: "G-NGNQNJMMBX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
