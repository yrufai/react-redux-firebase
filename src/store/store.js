import rrfConfig from "../config/rrfConfig";
import { reduxFirestore } from "redux-firestore";
import { reactReduxFirebase } from "react-redux-firebase";
import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "../config/fbConfig";

firebase.initializeApp(firebaseConfig);

const createStoreWithFirebase = compose(
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const initialState = {};

const store = createStoreWithFirebase(rootReducer, initialState);

export default store;
