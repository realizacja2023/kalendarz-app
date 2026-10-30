const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");
const fs = require('fs');

const firebaseConfig = {
  apiKey: "AIzaSyCAy0PcmKZEuZlxe2RiETdGLRkDwMWyJrU",
  authDomain: "kalendarz-imprez-293aa.firebaseapp.com",
  projectId: "kalendarz-imprez-293aa",
  storageBucket: "kalendarz-imprez-293aa.firebasestorage.app",
  messagingSenderId: "931389584664",
  appId: "1:931389584664:web:e3af497a64ddce43d29a6d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function exportData() {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    const allEvents = {};
    
    querySnapshot.forEach((doc) => {
      allEvents[doc.id] = doc.data();
    });

    fs.writeFileSync('firestore-backup.json', JSON.stringify(allEvents, null, 2), 'utf-8');
    console.log('Sukces! Pobrano wszystkie dane do pliku: firestore-backup.json');
  } catch (err) {
    console.error('Błąd podczas eksportu:', err);
  }
}

exportData();
