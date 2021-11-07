import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCszm5qVBWN23umpBMwAC2sB16E-NjCsLA",
    authDomain: "linkedinv2.firebaseapp.com",
    projectId: "linkedinv2",
    storageBucket: "linkedinv2.appspot.com",
    messagingSenderId: "662899951691",
    appId: "1:662899951691:web:5e2c67a74f3e9aa2bca5ce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };