import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA42BteDVPuYViV0wtCjbm0EDBQDMnmBgs",
    authDomain: "react-redux-app-48100.firebaseapp.com",
    databaseURL: "https://react-redux-app-48100.firebaseio.com",
    projectId: "react-redux-app-48100",
    storageBucket: "react-redux-app-48100.appspot.com",
    messagingSenderId: "353239727486",
    appId: "1:353239727486:web:b9d0e68d4d1759e9f3c72f",
    measurementId: "G-085D0HKCFV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;