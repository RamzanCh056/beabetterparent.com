import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVt_6NG31hN_KSltEfPLwpF4pB0daCnoU",
  authDomain: "askstella-5d3d5.firebaseapp.com",
  projectId: "askstella-5d3d5",
  storageBucket: "askstella-5d3d5.appspot.com",
  messagingSenderId: "30084021292",
  appId: "1:30084021292:web:dd54a5ea78aea6dc2ee589",
  measurementId: "G-72HS62KXYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
export default app;

