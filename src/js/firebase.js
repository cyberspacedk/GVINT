import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'
// Initialize Firebase
let config = {
    apiKey: "AIzaSyBClkV0ZBnAvDuoGtwafCHVlyGJnMWKnIo",
    authDomain: "servertest-e045e.firebaseapp.com",
    databaseURL: "https://servertest-e045e.firebaseio.com",
    projectId: "servertest-e045e",
    storageBucket: "servertest-e045e.appspot.com",
    messagingSenderId: "212365800760"
 };
 firebase.initializeApp(config);

 export default firebase;