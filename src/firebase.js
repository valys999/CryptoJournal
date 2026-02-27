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

// --- Cloud Image Storage (Cloudinary) ---
// To switch provider, replace only these 3 functions
const CLOUDINARY_CLOUD_NAME = 'ddznvepev';
const CLOUDINARY_UPLOAD_PRESET = 'cj_unsigned'; // Create this in Cloudinary Settings → Upload Presets

export async function uploadImageCloud(uid, imageId, dataUrl) {
    const formData = new FormData();
    formData.append('file', dataUrl);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('public_id', `${uid}/${imageId}`);
    formData.append('folder', 'cryptojournal');

    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData
    });
    if (!res.ok) throw new Error(`Cloudinary upload failed: ${res.status}`);
    const data = await res.json();
    return data.secure_url;
}

export async function downloadImageCloud(uid, imageId) {
    // Return Cloudinary CDN URL directly — auto-format and auto-quality
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/cryptojournal/${uid}/${imageId}`;
}

export async function deleteImageCloud(uid, imageId) {
    // Unsigned uploads can't delete — image stays in Cloudinary
    // Clean up manually from Cloudinary dashboard if needed
    console.log(`[IMG] Cloud delete skipped (unsigned): ${imageId}`);
}
