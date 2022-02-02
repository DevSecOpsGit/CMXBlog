import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  // ENTER YOUR CONFIG HERE
  apiKey: "AIzaSyDDNcxWkW1Nk3nQiFvHFEVjDyQJJ2b7Vjc",
  authDomain: "cmxblog.firebaseapp.com",
  projectId: "cmxblog",
  storageBucket: "cmxblog.appspot.com",
  messagingSenderId: "640281981052",
  appId: "1:640281981052:web:64a0672a9703a7c5e3d9f9",
  measurementId: "G-NJXRFJVN3H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
