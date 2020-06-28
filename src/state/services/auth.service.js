import firebase from './firebase';

export const login = async (email, password) =>
  firebase.doSignInWithEmailAndPassword(email, password);

export const logout = async () => firebase.doSignOut();
