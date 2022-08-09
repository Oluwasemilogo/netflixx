import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDR7UnXwheVkcYIpOzFs5HbqY_OU2urQ0",
    authDomain: "netflixx-84100.firebaseapp.com",
    projectId: "netflixx-84100",
    storageBucket: "netflixx-84100.appspot.com",
    messagingSenderId: "105151578578",
    appId: "1:105151578578:web:2e16fc729483792c26c80b",
    measurementId: "G-BYFN7ZPLVX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ auth }
  export default db; 