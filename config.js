import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDAlYRcLZz0WwlwyeGuLWg7GPfCPfmFASk",
  authDomain: "e-library-b985a.firebaseapp.com",
  projectId: "e-library-b985a",
  storageBucket: "e-library-b985a.appspot.com",
  messagingSenderId: "853842642685",
  appId: "1:853842642685:web:fd133aab315e38ef876094"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
