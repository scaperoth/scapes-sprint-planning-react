import firebase from './firebase';

export const create = (userId, options) => {
  return firebase.db.collection('planningSessions').add({
    ...options,
    owner: userId,
    createdAt: firebase.doGetTimestamp(),
    updatedAt: firebase.doGetTimestamp(),
  });
};

export const getOne = sessionId => {
  const query = firebase.db.collection('planningSessions').doc(sessionId);
  return new Promise((resolve, reject) => {
    query
      .get()
      .then(doc => {
        resolve({ id: doc.id, ...doc.data() } || {});
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getAll = userId => {
  const query = firebase.db
    .collection('planningSessions')
    .where('owner', '==', userId)
    .orderBy('createdAt', 'desc');
  return new Promise((resolve, reject) => {
    query
      .get()
      .then(snapshot => {
        const results = [];
        snapshot.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() });
        });
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const update = async (options) => {
  const query = firebase.db.collection('planningSessions').doc(options.id);
  const newOptions = {
    ...options,
    updatedAt: firebase.doGetTimestamp(),
  };
  await query.update(newOptions);
  return Promise.resolve(newOptions);
};

export const remove = (userId, options) => {
  const query = firebase.db.collection('planningSessions').doc(options.id);
  return new Promise((resolve, reject) =>
    query
      .delete()
      .then(() => {
        resolve(options);
      })
      .catch(err => {
        reject(err);
      }),
  );
};
