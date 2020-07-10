import firebase from './firebase';
import { snapshotChildMap } from '../helpers';

export const get = userId => {
  const path = `users/${userId}/planningSessions`;
  const ref = firebase.database.ref(path).orderByChild('createdAt');
  return new Promise((resolve, reject) => {
    ref
      .once('value')
      .then(snapshot => {
        resolve(snapshotChildMap(snapshot).reverse());
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const create = (userId, options) => {
  const path = `users/${userId}/planningSessions`;
  const newOptions = {
    ...options,
    createdAt: firebase.doGetTimestamp(),
  };
  const newRef = firebase.database
    .ref()
    .child(path)
    .push();
  return new Promise((resolve, reject) => {
    newRef.set(newOptions, error => {
      if (error) {
        reject(error);
      } else {
        resolve({
          key: newRef.key,
          ...newOptions,
        });
      }
    });
  });
};
