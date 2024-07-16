// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYjLveut2AniIRcmreZUDAL26WMQl5xro",
    authDomain: "afftograf-4be9e.firebaseapp.com",
    projectId: "afftograf-4be9e",
    storageBucket: "afftograf-4be9e.appspot.com",
    messagingSenderId: "84203882",
    appId: "1:84203882:web:d655c36e6671ffc4126d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export { app,database}