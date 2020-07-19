import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.app = app;
    this.auth = app.auth();
    this.analytics = app.analytics();
    this.db = app.firestore();
  }

  doGetTimestamp() {
    return this.app.firestore.FieldValue.serverTimestamp();
  }

  doCreateUserWithEmailAndPassword(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  async doSignInWithEmailAndPassword(email, password) {
    await this.auth.setPersistence(app.auth.Auth.Persistence.GAME);
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut() {
    return this.auth.signOut();
  }

  doPasswordReset(email) {
    return this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate(password) {
    return this.auth.currentUser.updatePassword(password);
  }

  async doGetCurrentUser() {
    await this.auth.setPersistence(app.auth.Auth.Persistence.GAME);
    if (!this.auth.currentUser) {
      return null;
    }
    return this.auth.currentUser;
  }

  doOnAuthStateChanged(callback) {
    this.auth.onAuthStateChanged(callback);
  }
}

const firebase = new Firebase();

export default firebase;
