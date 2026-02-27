// Firebase configuration & initialization
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL, deleteObject } from 'firebase/storage';

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
export const storage = getStorage(app);

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

// --- Cloud Storage helpers (abstraction layer) ---
// To switch to Cloudinary later, replace only these 3 functions

export async function uploadImageCloud(uid, imageId, dataUrl) {
    const imageRef = ref(storage, `users/${uid}/images/${imageId}`);
    await uploadString(imageRef, dataUrl, 'data_url');
    return await getDownloadURL(imageRef);
}

export async function downloadImageCloud(uid, imageId) {
    try {
        const imageRef = ref(storage, `users/${uid}/images/${imageId}`);
        return await getDownloadURL(imageRef);
    } catch {
        return null;
    }
}

export async function deleteImageCloud(uid, imageId) {
    try {
        const imageRef = ref(storage, `users/${uid}/images/${imageId}`);
        await deleteObject(imageRef);
    } catch {
        // Image may not exist in cloud, ignore
    }
}
