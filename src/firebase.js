import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDCllBfJ1J7lK2-cJDOnZqxUs_mqHTMizY",
  authDomain: "facebook-clone-322ae.firebaseapp.com",
  projectId: "facebook-clone-322ae",
  storageBucket: "facebook-clone-322ae.appspot.com",
  messagingSenderId: "752164561882",
  appId: "1:752164561882:web:6b5e95ee75c767b72916e3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();