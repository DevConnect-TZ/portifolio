import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtfBQoz1nm9ksiflXN-3njT_PbAxdcJR4",
  authDomain: "portifolio-533af.firebaseapp.com",
  projectId: "portifolio-533af",
  storageBucket: "portifolio-533af.firebasestorage.app",
  messagingSenderId: "336129590976",
  appId: "1:336129590976:web:abbd7fbb0ed50745eecf25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

