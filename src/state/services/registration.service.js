import firebase from './firebase';

export const registerUser = async (email, password) =>
  firebase.doCreateUserWithEmailAndPassword(email, password);
