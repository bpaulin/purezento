import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Get a Firestore instance
firebase.initializeApp({
  apiKey: "AIzaSyCVhv_oXVs59nApoiMkLloT7517weYNyAk",
  authDomain: "purezento-8c10f.firebaseapp.com",
  databaseURL: "https://purezento-8c10f.firebaseio.com",
  projectId: "purezento-8c10f",
  storageBucket: "purezento-8c10f.appspot.com",
  messagingSenderId: "572834651357",
  appId: "1:572834651357:web:80aaa22ca63b398bbf8f34",
  measurementId: "G-PR66H8VCEV",
});
export const db = firebase.firestore();
export const auth = firebase.auth();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
export { firebase };
