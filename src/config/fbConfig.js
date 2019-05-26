import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
  apiKey: "AIzaSyCvA3HysrYJVDr2DyIVv_Bq3ZykrTwvkEU",
  authDomain: "ghandhi-land.firebaseapp.com",
  databaseURL: "https://ghandhi-land.firebaseio.com",
  projectId: "ghandhi-land",
  storageBucket: "ghandhi-land.appspot.com",
  messagingSenderId: "91387781691",
  appId: "1:91387781691:web:a89f8da35b1f4fc3"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
