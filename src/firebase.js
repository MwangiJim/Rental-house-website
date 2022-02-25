import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDd1P1q7l4bUlof-knRhGUwhMKa_b9wKS8",
    authDomain: "rental-app-react-app.firebaseapp.com",
    projectId: "rental-app-react-app",
    storageBucket: "rental-app-react-app.appspot.com",
    messagingSenderId: "66152323678",
    appId: "1:66152323678:web:f1960e3c6a02b0b67c32cf",
    measurementId: "G-RXVSZJW3F3"
  };

  initializeApp(firebaseConfig)
 const db = getFirestore()

 export {db}
  