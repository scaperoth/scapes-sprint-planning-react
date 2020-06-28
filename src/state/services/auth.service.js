import firebase from './firebase';

export const registerUser = async (email, password) =>
  firebase.doCreateUserWithEmailAndPassword(email, password);

export const login = async (email, password) =>
  firebase.doSignInWithEmailAndPassword(email, password);

export const logout = async () => firebase.doSignOut();
