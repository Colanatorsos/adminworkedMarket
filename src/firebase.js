import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBngNFrHshkrwddUhSsLAzvKsIRJhQSe3U",
  authDomain: "adminmarket-3a0f3.firebaseapp.com",
  projectId: "adminmarket-3a0f3",
  storageBucket: "adminmarket-3a0f3.appspot.com",
  messagingSenderId: "862545608989",
  appId: "1:862545608989:web:da26477c26253fab59e1f4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

