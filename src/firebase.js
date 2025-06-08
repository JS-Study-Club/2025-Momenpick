// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZv2WyQ5eDW3pi4Yp25YXC4uU6RapEXVg",
  authDomain: "momenpick-c3ee8.firebaseapp.com",
  projectId: "momenpick-c3ee8",
  storageBucket: "momenpick-c3ee8.firebasestorage.app",
  messagingSenderId: "1030266833401",
  appId: "1:1030266833401:web:1d79605338cf1c23789528"
};

// Initialize Firebase
// ✅ Firebase 앱을 초기화하고 변수에 할당
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage }; // ✅ default 대신 명시적 export 사용