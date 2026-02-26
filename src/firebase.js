// Firebase configuration & initialization
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJMG0ma7PWBytkea1Vj2cwmdSJm42GFkE",
    authDomain: "cryptojournal-b7438.firebaseapp.com",
    projectId: "cryptojournal-b7438",
    storageBucket: "cryptojournal-b7438.firebasestorage.app",
    messagingSenderId: "413410672987",
    appId: "1:413410672987:web:b60d93c2d083aab6469a7e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

// --- Auth helpers ---
export function loginWithGoogle() {
    return signInWithPopup(auth, googleProvider);
}

export function logout() {
    return signOut(auth);
}

export function onAuth(callback) {
    return onAuthStateChanged(auth, callback);
}

// --- Firestore helpers ---
function userDocRef(uid) {
    return doc(db, 'users', uid);
}

export async function saveUserData(uid, data) {
    await setDoc(userDocRef(uid), data, { merge: true });
}

export async function loadUserData(uid) {
    const snap = await getDoc(userDocRef(uid));
    return snap.exists() ? snap.data() : null;
}
