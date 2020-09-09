import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkp8mYSJ9GXP-56MOuZnw7PjBwMwKso3c",
  authDomain: "clone-74fb5.firebaseapp.com",
  databaseURL: "https://clone-74fb5.firebaseio.com",
  projectId: "clone-74fb5",
  storageBucket: "clone-74fb5.appspot.com",
  messagingSenderId: "793318211417",
  appId: "1:793318211417:web:fed488f3555dce1f1a1648",
  measurementId: "G-E0P5B1JLRQ",
});

const auth = firebase.auth();

export { auth };
