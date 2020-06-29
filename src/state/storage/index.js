export const LOGIN_KEY = 'loggedin';

const Storage = {
  storage: localStorage,
  getItem(itemName) {
    return this.storage.getItem(itemName);
  },
  setItem(itemName, value) {
    return this.storage.setItem(itemName, value);
  },
};

export default Storage;
