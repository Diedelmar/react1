import { initializeApp } from "firebase/app";
import { collection, getDocs } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC-X74XUOf_Dqsk47EL2n6oDPehXd3AkA",
  authDomain: "proyecto-2f077.firebaseapp.com",
  projectId: "proyecto-2f077",
  storageBucket: "proyecto-2f077.appspot.com",
  messagingSenderId: "859985433310",
  appId: "1:859985433310:web:0e7dda54682fecd1e2e84f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionRef = collection(db, 'productos');
export default db; 
