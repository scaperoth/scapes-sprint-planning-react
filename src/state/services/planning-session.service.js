import firebase from './firebase';
import { snapshotChildMap } from '../helpers';

export const create = (userId, options) => {
  const path = `users/${userId}/planningSessions`;
  const newOptions = {
    ...options,
    createdAt: firebase.doGetTimestamp(),
    updatedAt: firebase.doGetTimestamp(),
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

export const getOne = (userId, sessionId) => {
  const path = `users/${userId}/planningSessions/${sessionId}`;
  const ref = firebase.database.ref(path);
  return new Promise((resolve, reject) => {
    ref
      .once('value')
      .then(snapshot => {
        resolve({ key: snapshot.key, ...snapshot.toJSON() } || {});
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getAll = userId => {
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

export const update = (userId, options) => {
  const path = `users/${userId}/planningSessions/${options.key}`;
  const newOptions = {
    ...options,
    updatedAt: firebase.doGetTimestamp(),
  };
  const ref = firebase.database.ref(path);
  return new Promise((resolve, reject) => {
    ref.set(newOptions, error => {
      if (error) {
        reject(error);
      } else {
        resolve({
          key: ref.key,
          ...newOptions,
        });
      }
    });
  });
};
