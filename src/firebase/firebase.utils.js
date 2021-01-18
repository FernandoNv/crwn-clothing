import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNvyiELHrX5CflZy9eYanUdxt90v4d2Sc",
    authDomain: "crwn-db-9804f.firebaseapp.com",
    projectId: "crwn-db-9804f",
    storageBucket: "crwn-db-9804f.appspot.com",
    messagingSenderId: "444171099056",
    appId: "1:444171099056:web:1cc68cfac7824d6b491475",
    measurementId: "G-PSWK0NSSPS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;