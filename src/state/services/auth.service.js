import firebase from './firebase';

export const registerUser = (email, password) =>
  firebase.doCreateUserWithEmailAndPassword(email, password);

export const login = (email, password) =>
  firebase.doSignInWithEmailAndPassword(email, password);

export const logout = () => firebase.doSignOut();

export const onAuthChanged = callback =>
  firebase.doOnAuthStateChanged(callback);
