import rrfConfig from "../config/rrfConfig";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "../config/fbConfig";
import thunk from "redux-thunk";

firebase.initializeApp(firebaseConfig);
firebase.firestore();

/*const createStoreWithFirebase = compose(
  thunk.withExtraArgument(getFirebase, getFirestore),
  reduxFirestore(firebase),
  reactReduxFirebase(firebaseConfig, rrfConfig)
)(createStore);*/

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  )
);

export default store;
