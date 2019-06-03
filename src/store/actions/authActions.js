const signInAction = credentials => {
  return (dispatch, getState, { getfirebase, getfirestore }) => {
    const firebase = getState.firebase;
    console.log(firebase);
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export default signInAction;
