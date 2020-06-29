import firebase from './firebase';

export const registerUser = (email, password) =>
  firebase.doCreateUserWithEmailAndPassword(email, password);
