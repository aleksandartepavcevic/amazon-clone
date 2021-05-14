import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDcMqtw4LmWhOLQyqO50ITn7UbcjErV2Gw',
  authDomain: 'clone-9e184.firebaseapp.com',
  projectId: 'clone-9e184',
  storageBucket: 'clone-9e184.appspot.com',
  messagingSenderId: '303114042117',
  appId: '1:303114042117:web:cb72b5ea87f17dad10d56c',
});

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth, firebaseApp };
