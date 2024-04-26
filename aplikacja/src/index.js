import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "TWÓJ_KLUCZ_API",
  authDomain: "DOWOLNA_DOMENA_AUTORYZACJI",
  projectId: "DOWOLNY_IDENTYFIKATOR_PROJEKTU",
  storageBucket: "DOWOLNY_IDENTYFIKATOR_MAGAZYNU",
  messagingSenderId: "DOWOLNY_IDENTYFIKATOR_NADAWCY_WIADOMOŚCI",
  appId: "DOWOLNE_ID_APPLIKACJI"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };