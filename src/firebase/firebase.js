// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdlZRe3z1lhoE3qLZZM8BMZ1f0DG0x4Tk",
  authDomain: "cafe-du-ando2.firebaseapp.com",
  projectId: "cafe-du-ando2",
  storageBucket: "cafe-du-ando2.appspot.com",
  messagingSenderId: "508706446883",
  appId: "1:508706446883:web:d4ee6f6cb562b216d61b96"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage()

export {db , storage};
