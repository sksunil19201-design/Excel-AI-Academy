//==================================================
// EXCEL AI ACADEMY
// FIREBASE CONFIGURATION
// js/firebase-config.js
//==================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAicudV_nb_Xfcmcn3nhhzUxQSuXiDAXtc",
    authDomain: "excel-ai-academy.firebaseapp.com",
    projectId: "excel-ai-academy",
    storageBucket: "excel-ai-academy.firebasestorage.app",
    messagingSenderId: "679155238492",
    appId: "1:679155238492:web:5a28dd685d1e5db5a18899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
