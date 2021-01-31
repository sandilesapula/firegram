// import * as firebase from "firebase/app";
import firebase from "firebase/app";

import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDQCJyJJ8lblybFgmHJGoevCIo44JK81g4",
  authDomain: "kasi-firegram.firebaseapp.com",
  projectId: "kasi-firegram",
  storageBucket: "kasi-firegram.appspot.com",
  messagingSenderId: "504411752460",
  appId: "1:504411752460:web:06591598028fe117598629",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
