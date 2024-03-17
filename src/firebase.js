import firebase from "firebase/compat/app";
import "firebase/firestore";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvEnOeiN4tt1U43m1jo8Wxe23fJR2hmps",
  authDomain: "easy-groceries-1ead5.firebaseapp.com",
  projectId: "easy-groceries-1ead5",
  storageBucket: "easy-groceries-1ead5.appspot.com",
  messagingSenderId: "926584648572",
  appId: "1:926584648572:web:21f6ad0ecb4f2141012af9"
};

const app = firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = app.firestore();
export default db;