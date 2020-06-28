import firebase from './firebase';

export const registerUser = async (email, password) => {
  return firebase.doCreateUserWithEmailAndPassword(email, password);
};
