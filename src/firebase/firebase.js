import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// const firebaseConfig = {
//     apiKey: "AIzaSyBJcnveyQKObQmUTGLPhlswgkVmIPTlaWQ",
//     authDomain: "fire-cosmos.firebaseapp.com",
//     databaseURL:
//         "https://fire-cosmos-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "fire-cosmos",
//     storageBucket: "fire-cosmos.appspot.com",
//     messagingSenderId: "815862218362",
//     appId: "1:815862218362:web:05ef931bcd1a874bc945c3",
// };

// console.log(firebaseConfig.apiKey);
console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// firebase.firestore();
export const auth = firebase.auth();
export default firebase;