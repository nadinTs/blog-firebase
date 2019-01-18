import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD3i-k4gVxEid5yaZW3s5_U_zMnwjnPycQ",
    authDomain: "blog-firebase-88458.firebaseapp.com",
    databaseURL: "https://blog-firebase-88458.firebaseio.com",
    projectId: "blog-firebase-88458",
    storageBucket: "blog-firebase-88458.appspot.com",
    messagingSenderId: "764271612423"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
