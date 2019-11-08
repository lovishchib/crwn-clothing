import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "AIzaSyBvuMQnLzsfQNlbGSTtJeYBz7pbWth3kKc",
    authDomain: "crwn-db-3ef90.firebaseapp.com",
    databaseURL: "https://crwn-db-3ef90.firebaseio.com",
    projectId: "crwn-db-3ef90",
    storageBucket: "crwn-db-3ef90.appspot.com",
    messagingSenderId: "783970539567",
    appId: "1:783970539567:web:cffe812ea878e18f038eda",
    measurementId: "G-4L3J6V7BH9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;