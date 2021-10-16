// Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Config
import { firebaseConfig } from './firebase';

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, collection, doc, getDoc, getDocs, setDoc, auth, provider };
