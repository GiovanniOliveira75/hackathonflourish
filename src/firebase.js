import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCBvSRWbJuCtWobirpxE_JS2nHUAT4EkSM",
    authDomain: "hackathon-d81cd.firebaseapp.com",
    databaseURL: "https://hackathon-d81cd.firebaseio.com",
    projectId: "hackathon-d81cd",
    storageBucket: "hackathon-d81cd.appspot.com",
    messagingSenderId: "22542134290",
    appId: "1:22542134290:web:722694761a18c949"
};

firebase.initializeApp(firebaseConfig);

export default firebase;