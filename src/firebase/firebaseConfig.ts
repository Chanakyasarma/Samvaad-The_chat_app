import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8XUXS2p6KOrMSjxDQ9-w_GPwk3czaTkE",
  authDomain: "samvaad-d01b2.firebaseapp.com",
  projectId: "samvaad-d01b2",
  storageBucket: "samvaad-d01b2.appspot.com",
  messagingSenderId: "891313758814",
  appId: "1:891313758814:web:a4f6639142a2145f37cacf",
  measurementId: "G-G3X0165CCF"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseFirestore = getFirestore(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

export { firebaseAuth, firebaseFirestore, firebaseStorage };
