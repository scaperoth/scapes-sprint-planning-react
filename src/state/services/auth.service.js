import firebase from './firebase';

export const login = async (email, password) => {
  return firebase.doSignInWithEmailAndPassword(email, password);
};

export const logout = async () => {
  return firebase.doSignOut();
};
